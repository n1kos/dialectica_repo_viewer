<template>
  <div>
    <TabNavBarView></TabNavBarView>
    repo description here
    {{ repository }}
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
