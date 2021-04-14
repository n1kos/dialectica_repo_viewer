<template>
  <div id="main">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App"
});
</script>
<style lang="scss">
@import "@/design/index.scss";
</style>
