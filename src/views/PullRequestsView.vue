<template>
  <div class="content">
    <span class="is-title">
      Pull Requests
    </span>
    <p>data from this view {{ repository }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ComputedRef, computed } from "vue";
import { RepoDataRequest } from "@/shared/modeling/model-static";
import { StorageService } from "../shared/services/storage-service";

export default defineComponent({
  name: "PullRequestsView",
  setup() {
    const storageService: StorageService = new StorageService();
    const repository: ComputedRef<RepoDataRequest | null> = computed(
      (): RepoDataRequest | null => storageService.getselectedRepository()
    );

    return {
      repository
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/design/viewsTemplate.scss";
</style>
