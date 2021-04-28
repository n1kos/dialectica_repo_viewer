<template>
  <div class="content">
    <span v-if="loading">Loading...</span>
    <span v-else-if="error">Error!</span>
    <IssuesDataTable
      :issues="issues"
      :loading="loading"
      :searchOptions="searchOptions"
      @loadMoreIssues="loadMoreIssues"
      :moreIssues="moreIssues"
    ></IssuesDataTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, ComputedRef, computed, ref, watch } from "vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import { SEARCH_REPOS_ISSUES_MORE } from "@/shared/graphql/documents";
import { RepoDataRequest } from "@/shared/modeling/model-static";
import { StorageService } from "@/shared/services/storage-service";
import IssuesDataTable from "@/views/IssuesTableView.vue";

export default defineComponent({
  name: "IssuesView",
  components: {
    IssuesDataTable
  },

  setup() {
    const storageService: StorageService = new StorageService();
    const repository: ComputedRef<RepoDataRequest | null> = computed(
      (): RepoDataRequest | null => storageService.getselectedRepository()
    );

    const moreIssues = ref([]);

    const searchOptions = {
      //@ts-expect-error need to add the issue interface
      owner: repository.value.node.owner.login,
      //@ts-expect-error need to add the issue interface
      name: repository.value.node.name,
      first: 20,
      after: null
    };

    const { result, variables, loading, error, fetchMore } = useQuery<{}>(
      SEARCH_REPOS_ISSUES_MORE,
      { fetchPolicy: "cache-and-network", ...searchOptions }
    );

    const issues = useResult(
      result,
      [],
      //@ts-expect-error need to add the issue interface
      data => data.repository.issues.nodes
    );

    const cursor = useResult(
      result,
      "",
      //@ts-expect-error need to add the issue interface
      data => data.repository.issues.pageInfo.endCursor
    );

    const loadMoreIssues = async () => {
      const moreResult = await fetchMore({});

      //@ts-expect-error need to add the issue interface
      variables.value.after = result.value.repository.issues.pageInfo.endCursor;

      //@ts-expect-error need to add the issue interface
      moreIssues.value.push(...moreResult.data.repository.issues.nodes);
    };

    return {
      repository,
      searchOptions,
      error,
      loading,
      issues,
      loadMoreIssues,
      moreIssues
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/design/viewsTemplate.scss";
</style>
