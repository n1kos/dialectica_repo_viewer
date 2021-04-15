<template>
  <div id="main" class="container">
    <navbar-view />
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavbarView from "@/views/NavbarView.vue";

export default defineComponent({
  components: { NavbarView },
  name: "App"
});
</script>
<style lang="scss">
@import "@/design/index.scss";
</style>
