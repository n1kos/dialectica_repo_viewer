<template>
  <div class="card">
    <div class="card-content">
      <router-link
        :to="{
          name: 'RepoRoute',
          params: { id: repository.repo.name }
        }"
        ><p class="title">
          {{ repository.repo.name }}
        </p>
      </router-link>
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
</template>
<script lang="ts">
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
  setup(props) {
    const { repository, searchOptions } = toRefs(props);
  }
});
</script>
