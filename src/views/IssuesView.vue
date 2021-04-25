<template>
  <div class="content">
    <span v-if="loading">Loading...</span>
    <span v-else-if="error">Error!</span>
    <IssuesDataTable
      :issues="issues"
      :searchOptions="searchOptions"
    ></IssuesDataTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, ComputedRef, computed } from "vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import { SEARCH_REPOS_ISSUES } from "@/shared/graphql/documents";
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

    const searchOptions = {
      //@ts-expect-error need to add the issue interface
      owner: repository.value.node.owner.login,
      //@ts-expect-error need to add the issue interface
      name: repository.value.node.name,
      first: 20
    };

    const { result, loading, error } = useQuery<{}>(
      SEARCH_REPOS_ISSUES,
      searchOptions
    );

    const issues = useResult(
      result,
      [],
      //@ts-expect-error need to add the issue interface
      data => data.repository.issues.edges
    );

    return {
      repository,
      searchOptions,
      error,
      loading,
      issues
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/design/viewsTemplate.scss";
</style>
