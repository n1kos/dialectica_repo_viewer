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
      <span class="card-footer-item has-background-grey is-clickable">
        <div class="has-text-info-dark ">
          <span class="level-item is-size-4">
            Stars:
            <span class="pl-2">{{ repository.node.stargazerCount }}</span>
          </span>
          <span class="level-item"> Star! </span>
        </div>
      </span>
    </footer>
  </div>
</template>
<script lang="ts">
import router from "@/router";
import { defineComponent } from "vue";
import { StorageService } from "@/shared/services/storage-service";
import { RepoDataRequest } from "@/shared/modeling/model-static";
import filters from "@/shared/helpers/filters";

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
    const storageService: StorageService = new StorageService();
    const selectItem = (item: RepoDataRequest): void => {
      // console.log(item);

      storageService.setselectedRepository(item);
      router.push({
        name: "RepoRoute",
        params: { id: props.repository.node.name }
      });
    };
    return { selectItem, filters };
  }
});
</script>
