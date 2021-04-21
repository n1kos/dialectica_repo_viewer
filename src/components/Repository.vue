<template>
  <div>
    <TabNavBarView></TabNavBarView>
    repo description here
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
  }
});
</script>

<style scoped lang="scss"></style>
