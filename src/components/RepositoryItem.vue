<template>
  <div class="card">
    <div class="card-content">
      <router-link
        :to="{
          name: 'RepoRoute',
          params: { id: repository.node.name }
        }"
        ><p class="title">
          {{ repository.node.name }}
        </p>
      </router-link>
      <p class="subtitle">{{ repository.node.description }}</p>
      <p class="subtitle">
        {{ `Created at ${repository.node.createdAt}` }}
      </p>
      <p class="subtitle">{{ `Forks ${repository.node.forkCount}` }}</p>
      <p class="subtitle">
        {{ `Open Issues ${repository.node.issues.totalCount}` }}
      </p>
      <p class="subtitle">
        {{ `Pull Requests ${repository.node.pullRequests.totalCount}` }}
      </p>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <span>
          <a :href="repository.node.url">{{ repository.node.url }}</a>
        </span>
      </p>
      <p class="card-footer-item">
        <span> Toggle Star For This Repo </span>
      </p>
    </footer>
  </div>
</template>
<script lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "RepositoryItem",
  props: {
    repository: {
      type: Object,
      required: true
    },
    searchOptions: {
      type: Object,
      required: true
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props) {
    return {};
  }
});
</script>
