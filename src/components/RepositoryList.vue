<template>
  <div class="">
    <!-- {{ repositories }} -->
    <ul class="card">
      <li
        class="card-content "
        v-for="repository in repositories.data.search.repos"
        :key="repository.repo.id"
      >
        <a class="card-header" :href="repository.repo.url"
          ><span>{{ repository.repo.description }}</span></a
        >
        <span class="card-content">{{ repository.repo.description }}</span>
        <span class="card-footer">{{
          `Created at ${repository.repo.createdAt}`
        }}</span>
        <span>{{ `Forks ${repository.repo.forkCount}` }}</span>
        <!-- {{ repository }} -->
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { RepoData } from "../shared/modeling/model-static";

export default defineComponent({
  name: "RepositoryList",
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
