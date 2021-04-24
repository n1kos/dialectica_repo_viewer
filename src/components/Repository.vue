<template>
  <div>
    <div class="content">
      <p class="title">{{ repository.node.nameWithOwner }}</p>
      <p class="subtitle">{{ repository.node.description }}</p>
    </div>
    <TabNavBarView :repository="repository"></TabNavBarView>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, ComputedRef, computed } from "vue";
import TabNavBarView from "@/views/TabNavBarView.vue";
import { RepoDataRequest } from "@/shared/modeling/model-static";
import { StorageService } from "../shared/services/storage-service";

export default defineComponent({
  name: "Repository",
  components: {
    TabNavBarView
  },

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

<style scoped lang="scss"></style>
