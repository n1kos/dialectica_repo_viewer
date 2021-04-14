<template>
  <div class="tabs">
    <ul>
      <li><router-link to="/issues">Issues</router-link></li>
      <li><router-link to="/pull-requests">Pull Requests</router-link></li>
      <li><router-link to="/forks">Forks</router-link></li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Repository",
  props: {
    repository: {
      type: Object,
      required: true
    }
  }
});
</script>

<style scoped lang="scss"></style>
