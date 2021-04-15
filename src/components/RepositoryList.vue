<template>
  <div class="">
    <ul>
      <li
        class=""
        v-for="repository in repositories.data.search.repos"
        :key="repository.repo.id"
      >
        <RepositoryItem
          :repository="repository"
          :search-options="searchOptions"
        />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { RepoData } from "../shared/modeling/model-static";
import RepositoryItem from "@/components/RepositoryItem.vue";

export default defineComponent({
  name: "RepositoryList",
  components: {
    RepositoryItem
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, context) {
    /**
 *? query to get data:
query {
  search(
    type:REPOSITORY,
    query: "*react*",
    last: 100
  ) {
    repos: edges {
      repo: node {
        ... on Repository {
          name,
          url,
          createdAt,
          description,
          forkCount,
          id,
        }
      }
    }
  }
}
 */
    // get some static data to work with
    const repositories: object = RepoData;

    return {
      repositories
    };
  }
});
</script>
