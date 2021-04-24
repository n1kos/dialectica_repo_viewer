<template>
  <div class="content">
    <span v-if="loading">Loading...</span>
    <span class="is-title"> Issues {{ issues }} </span>
    <!-- <p>data from this view {{ repository }}</p> -->
    <!-- {{ result }} -->
    {{ repository.value }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ComputedRef, computed } from "vue";
import { Issue } from "@octokit/graphql-schema";
import { useQuery, useResult } from "@vue/apollo-composable";
import { SEARCH_REPOS_ISSUES } from "@/shared/graphql/documents";
import { RepoDataRequest } from "@/shared/modeling/model-static";
import { StorageService } from "../shared/services/storage-service";

export default defineComponent({
  name: "IssuesView",
  setup() {
    const storageService: StorageService = new StorageService();
    const repository: ComputedRef<RepoDataRequest | null> = computed(
      (): RepoDataRequest | null => storageService.getselectedRepository()
    );

    console.log(repository);

    const searchOptions = {
      //@ts-expect-error need to add the issue interface
      owner: repository.value.node.owner.login,
      //@ts-expect-error need to add the issue interface
      name: repository.value.node.name,
      last: 10
    };

    const { result, loading, error } = useQuery<{
      search: Issue;
    }>(SEARCH_REPOS_ISSUES, searchOptions);

    const issues = useResult(result, [], data => data);

    return {
      repository,
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
