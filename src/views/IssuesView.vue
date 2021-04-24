<template>
  <div class="content">
    <span class="is-title">
      Issues
    </span>
    <!-- <p>data from this view {{ repository }}</p> -->
    {{ result }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ComputedRef, computed } from "vue";
// import { SearchResultItemConnection } from "@octokit/graphql-schema";
import { useQuery, useResult } from "@vue/apollo-composable";
import { SEARCH_REPOS_ISSUES } from "@/shared/graphql/documents";
import { RepoDataRequest } from "@/shared/modeling/model-static";
import { StorageService } from "../shared/services/storage-service";

// import { SEARCH_REPOS } from "@/shared/graphql/documents";

export default defineComponent({
  name: "IssuesView",
  setup() {
    const storageService: StorageService = new StorageService();
    const repository: ComputedRef<RepoDataRequest | null> = computed(
      (): RepoDataRequest | null => storageService.getselectedRepository()
    );

    const searchOptions = {
      owner: "facebook",
      name: "react",
      last: 10
    };

    const { error, loading, result } = useQuery(
      SEARCH_REPOS_ISSUES,
      searchOptions
    );
    // const { result, loading, error } = useQuery<{
    //   search: SearchResultItemConnection;
    // }>(SEARCH_REPOS_ISSUES, searchOptions);

    // const issues = useResult(
    //   result,
    //   [],
    //   data => data.search && data.search.edges
    // );

    // const searchOptions = { query: "react", limit: 10 };

    // const { result, loading, error } = useQuery<{
    //   search: SearchResultItemConnection;
    // }>(SEARCH_REPOS, searchOptions);

    // const issues = useResult(
    //   result,
    //   [],
    //   data => data.search && data.search.edges
    // );

    // console.log(issues);

    return {
      repository,
      result
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/design/viewsTemplate.scss";
</style>
