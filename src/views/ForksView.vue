<template>
  <div class="content">
    <span v-if="loading">Loading...</span>
    <span v-else-if="error">Error!</span>
    <ForksDataTable
      :issues="issues"
      :loading="loading"
      :error="error"
      :hasNextPage="hasNextPage"
      @loadMoreIssues="loadMoreIssues"
    ></ForksDataTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, ComputedRef, computed, ref } from "vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import { SEARCH_REPOS_FORKS_MORE } from "@/shared/graphql/documents";
import { RepoDataRequest } from "@/shared/modeling/model-static";
import { StorageService } from "@/shared/services/storage-service";
import ForksDataTable from "@/views/ForksTableView.vue";

export default defineComponent({
  name: "ForksView",
  components: {
    ForksDataTable
  },

  setup() {
    const storageService: StorageService = new StorageService();
    const repository: ComputedRef<RepoDataRequest | null> = computed(
      (): RepoDataRequest | null => storageService.getselectedRepository()
    );

    const issues = ref([]);

    const searchOptions = {
      //@ts-expect-error need to add the issue interface
      owner: repository.value.node.owner.login,
      //@ts-expect-error need to add the issue interface
      name: repository.value.node.name,
      first: 20,
      after: null
    };

    const {
      result,
      variables,
      loading,
      error,
      fetchMore,
      onResult
    } = useQuery<{}>(SEARCH_REPOS_FORKS_MORE, {
      fetchPolicy: "cache-and-network",
      ...searchOptions
    });

    const hasNextPage = useResult(
      result,
      false,
      //@ts-expect-error need to add the issue interface
      data => data.repository.forks.pageInfo.hasNextPage
    );

    onResult(() => {
      console.log(result);

      //@ts-expect-error need to add the issue interface
      issues.value.push(...result.value.repository.forks.nodes);
    });

    const loadMoreIssues = async () => {
      await fetchMore({});

      variables.value.after =
        //@ts-expect-error need to add the issue interface
        result.value.repository.forks.pageInfo.endCursor;

      ////@ts-expect-error need to add the issue interface
      // moreIssues.value.push(...result.value.repository.forks.nodes);
    };

    return {
      repository,
      searchOptions,
      error,
      loading,
      issues,
      loadMoreIssues,
      hasNextPage
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/design/viewsTemplate.scss";
</style>
