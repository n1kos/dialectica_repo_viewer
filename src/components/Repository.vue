<template>
  <div>
    <TabNavBarView></TabNavBarView>
    repo description here
    {{ getComputedRepository }}

    {{ getComputedRepository.node }}
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, ComputedRef, computed } from "vue";
import TabNavBarView from "@/views/TabNavBarView.vue";

export default defineComponent({
  name: "Repository",
  components: {
    TabNavBarView
  },
  props: {
    repository: {
      type: String,
      required: true
    }
  },

  setup(context) {
    const getComputedRepository: ComputedRef<string> = computed((): string =>
      JSON.parse(context.repository)
    );

    return {
      getComputedRepository
    };
  }
});
</script>

<style scoped lang="scss"></style>
