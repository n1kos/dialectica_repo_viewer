<template>
  <div class="">
    <ul v-if="repositories.length">
      <li class="" v-for="repository in repositories" :key="repository.id">
        <RepositoryItem
          :repository="repository"
          :search-options="searchOptions"
        />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import { SearchResultItemConnection } from "@octokit/graphql-schema";
import { SEARCH_REPOS } from "@/shared/graphql/documents";
import RepositoryItem from "@/components/RepositoryItem.vue";

export default defineComponent({
  name: "RepositoryList",
  components: {
    RepositoryItem
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

    const { result, loading, error } = useQuery<{
      search: SearchResultItemConnection;
    }>(SEARCH_REPOS, searchOptions);

    const repositories = useResult(
      result,
      [],
      data => data.search && data.search.edges
    );

    return {
      loading,
      error,
      repositories
    };
  }
});
</script>
