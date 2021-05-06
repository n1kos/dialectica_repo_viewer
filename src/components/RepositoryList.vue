<template>
  <div class="">
    <span class="is-info" v-if="loading">Loading...</span>
    <ul v-if="repositories.length">
      <li class="" v-for="repository in repositories" :key="repository.id">
        <RepositoryListItem
          :repository="repository"
          :search-options="searchOptions"
        />
      </li>
    </ul>
    <span class="message is-info" v-else-if="hasNoResult && hasNoError"
      >No results
    </span>
    <span class="message is-danger" v-if="!hasNoError && shouldReport"
      >Check Token</span
    >
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, toRefs } from "vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import { SearchResultItemConnection } from "@octokit/graphql-schema";
import { SEARCH_REPOS } from "@/shared/graphql/documents";
import RepositoryListItem from "@/components/RepositoryListItem.vue";

export default defineComponent({
  name: "RepositoryList",
  components: {
    RepositoryListItem
  },
  props: {
    searchOptions: {
      type: Object,
      default() {
        return { query: "", limit: 10 };
      }
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props: { searchOptions: Record<string, any> }) {
    const { searchOptions } = toRefs(props);
    const hasNoResult = ref(false);
    const shouldReport = ref(false);
    const hasNoError = ref(true);

    const { result, loading, error, onError, onResult } = useQuery<{
      search: SearchResultItemConnection;
    }>(SEARCH_REPOS, searchOptions);

    const repositories = useResult(
      result,
      [],
      data => data.search && data.search.edges
    );

    /**
     * ! Apollo is making an initial request with no credentials that cause an error
     * ! If this could be stopped, this code might not be necessary
     * ! Also, there seems to be a mismatch on the error report of the results
     * ! ie even though the request was succesful, if there was a previous error
     * ! it seems to think there is still an error. So, this is trying to solve this
     * ! whilst giving feedback to the user about the outcome of the query execution...
     */
    onResult(() => {
      try {
        if (result.value.search.edges) {
          hasNoResult.value = true;
          shouldReport.value = true;
          hasNoError.value = true;
        }
      } catch (e) {
        shouldReport.value = false;
      }
    });

    onError(() => {
      shouldReport.value = true;
      hasNoError.value = false;
    });

    return {
      loading,
      error,
      repositories,
      result,
      hasNoResult,
      shouldReport,
      hasNoError
    };
  }
});
</script>
