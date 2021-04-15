<template>
  <div class="">
    <ul>
      <li
        class=""
        v-for="repository in repositories.data.search.repos"
        :key="repository.repo.id"
      >
        <div class="card">
          <div class="card-content">
            <p class="title">
              {{ repository.repo.name }}
            </p>
            <p class="subtitle">{{ repository.repo.description }}</p>
            <p class="subtitle">
              {{ `Created at ${repository.repo.createdAt}` }}
            </p>
            <p class="subtitle">{{ `Forks ${repository.repo.forkCount}` }}</p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <a :href="repository.repo.url">{{ repository.repo.url }}</a>
              </span>
            </p>
            <p class="card-footer-item">
              <span> Toggle Star For This Repo </span>
            </p>
          </footer>
        </div>
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
