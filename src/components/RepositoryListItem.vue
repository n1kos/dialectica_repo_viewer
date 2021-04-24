<template>
  <div class="card">
    <div class="card-content">
      <!--
        There seems to be an issue about passing params to router link, so this is a bit of a hack
        to move forwards
        https://github.com/vuejs/vue-router-next/issues/494
        -->

      <p class="title">
        <a href="#" @click.prevent="selectItem(repository)">
          {{ repository.node.nameWithOwner }}</a
        >
      </p>

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
import router from "@/router";
import { defineComponent } from "vue";
import { StorageService } from "@/shared/services/storage-service";
import { RepoDataRequest } from "@/shared/modeling/model-static";

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
    const storageService: StorageService = new StorageService();

    const selectItem = (item: RepoDataRequest): void => {
      console.log(item);

      storageService.setselectedRepository(item);
      router.push({
        name: "RepoRoute",
        params: { id: props.repository.node.name }
      });
    };
    return { selectItem };
  }
});
</script>
