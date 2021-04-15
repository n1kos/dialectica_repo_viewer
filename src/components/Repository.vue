<template>
  <div>
    repo description here
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
