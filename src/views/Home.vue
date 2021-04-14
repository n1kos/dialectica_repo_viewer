<template>
  <div class="home">
    <h1 class="">
      Find
      <span class="">GitHub</span>
      Repositories:
    </h1>
    <SearchBar @search="search" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "@/components/SearchBar.vue";
import { SearchData } from "@/shared/modeling/model-common";

export default defineComponent({
  name: "Home",
  components: {
    SearchBar
  },
  setup() {
    const search = (query: SearchData) => {
      console.log(query);
    };

    return {
      search
    };
  }
});
</script>

<style lang="scss">
@import "@/design/index.scss";
</style>
