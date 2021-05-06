<template>
  <div class="card mb-5">
    <div class="card-content">
      <!--
        There seems to be an issue about passing params to router link, so this is a bit of a hack
        to move forwards
        https://github.com/vuejs/vue-router-next/issues/494
        -->

      <span class="title is-block">
        <a href="#" @click.prevent="selectItem(repository)">
          {{ repository.node.nameWithOwner }}</a
        >
      </span>

      <span class="subtitle is-block"
        >{{ repository.node.description }}
        <div class="level">
          <span class="has-text-info-dark has-background-grey">
            {{
              `Created at ${filters.filteredDate(repository.node.createdAt)}`
            }}
          </span>
          <span class="has-text-info-dark has-background-grey">{{
            `Forks: ${repository.node.forkCount}`
          }}</span>
          <span class="has-text-info-dark has-background-grey">
            {{ `Open Issues: ${repository.node.issues.totalCount}` }}
          </span>
          <span class="has-text-info-dark has-background-grey">
            {{ `Pull Requests: ${repository.node.pullRequests.totalCount}` }}
          </span>
        </div>
      </span>
    </div>
    <footer class="card-footer">
      <span class="card-footer-item">
        <span>
          <a :href="repository.node.url">{{ repository.node.url }}</a>
        </span>
      </span>
      <span
        class="card-footer-item has-background-grey is-clickable"
        @click.prevent="handleStarBtnClick"
        :class="{
          'is-starred': repository.node.viewerHasStarred
        }"
      >
        <div class="has-text-info-dark ">
          <span class="level-item is-size-4">
            Stars:
            <span class="pl-2">{{ repository.node.stargazerCount }}</span>
          </span>
          <span class="level-item is-size-5">
            <span v-if="repository.node.viewerHasStarred">un-</span>star!
          </span>
        </div>
      </span>
    </footer>
  </div>
</template>
<script lang="ts">
import router from "@/router";
import { defineComponent, toRefs } from "vue";
import { StorageService } from "@/shared/services/storage-service";
import { RepoDataRequest } from "@/shared/modeling/model-static";
import filters from "@/shared/helpers/filters";
import {
  ADD_STAR,
  REMOVE_STAR,
  SEARCH_REPOS
} from "@/shared/graphql/documents";
import {
  AddStarInput,
  AddStarPayload,
  RemoveStarInput,
  RemoveStarPayload,
  SearchResultItemConnection,
  Repository
} from "@octokit/graphql-schema";
import { useMutation } from "@vue/apollo-composable";
import { ApolloCache } from "@apollo/client/core";
import { CacheData, QueryVariables } from "@/shared/modeling/model-common";

export default defineComponent({
  name: "RepositoryItem",
  props: {
    repository: {
      type: Object,
      required: true
    },
    searchOptions: {
      type: Object,
      required: true
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props) {
    let selectedId: string;
    const { repository, searchOptions } = toRefs(props);

    const storageService: StorageService = new StorageService();
    const selectItem = (item: RepoDataRequest): void => {
      storageService.setselectedRepository(item);
      router.push({
        name: "RepoRoute",
        params: { id: repository.value.node.name }
      });
    };

    const overrideMutationStarCache = (
      mutation: string,
      cache: ApolloCache<CacheData>,
      data: CacheData | null | undefined,
      queryVariables: QueryVariables,
      calcNewTotal: (totalCount: number) => number
    ) => {
      const cachedData = cache.readQuery<{
        search: SearchResultItemConnection;
      }>({
        query: SEARCH_REPOS,
        variables: queryVariables
      });
      cache.writeQuery({
        query: SEARCH_REPOS,
        data: Object.assign({}, cachedData, {
          search: {
            edges: cachedData!.search.edges!.map(edge => {
              const repo = edge!.node as Repository;
              const clonedRepo = {
                ...repo,
                stargazers: repo.stargazers
              };

              if (clonedRepo.id === data![mutation].starrable!.id) {
                clonedRepo.viewerHasStarred = data![
                  mutation
                ].starrable!.viewerHasStarred;
                clonedRepo.stargazerCount = calcNewTotal(
                  clonedRepo.stargazerCount
                );
              }

              return {
                ...edge,
                node: clonedRepo
              };
            })
          }
        })
      });
    };

    const { mutate: starRepo } = useMutation<
      { addStar: AddStarPayload },
      { repositoryId: AddStarInput["starrableId"] }
    >(ADD_STAR, () => ({
      variables: {
        repositoryId: selectedId
      },
      update: (cache, { data }) => {
        overrideMutationStarCache(
          "addStar",
          cache,
          data,
          searchOptions.value,
          stargazerCount => stargazerCount + 1
        );
      }
    }));

    const { mutate: unstarRepo } = useMutation<
      {
        removeStar: RemoveStarPayload;
      },
      { repositoryId: RemoveStarInput["starrableId"] }
    >(REMOVE_STAR, () => ({
      variables: {
        repositoryId: selectedId
      },
      update: (cache, { data }) => {
        overrideMutationStarCache(
          "removeStar",
          cache,
          data,
          searchOptions.value,
          stargazerCount => stargazerCount - 1
        );
      }
    }));

    const handleStarBtnClick = (evt: Event) => {
      const { id, viewerHasStarred } = props.repository.node;
      selectedId = id;

      if (viewerHasStarred) {
        unstarRepo();
      } else {
        starRepo();
      }
    };
    return { selectItem, filters, handleStarBtnClick };
  }
});
</script>
<style lang="scss" scoped>
.is-starred {
  background-color: gold !important;
}
</style>
