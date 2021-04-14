<template>
  <form class="">
    <div class="">
      <input
        v-model="searchData.token"
        class="search-input"
        placeholder="Token"
      />
      <input
        v-model="searchData.repo"
        class="search-input"
        placeholder="Ex. React"
      />
    </div>
    <button @click.prevent="handleInputChange">Search</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { SearchData } from "@/shared/modeling/model-common";

export default defineComponent({
  name: "SearchBar",
  setup(props, context) {
    const searchData: SearchData = reactive({
      token: "",
      repo: ""
    });

    const handleInputChange = () => {
      context.emit("search", searchData);
    };
    return {
      searchData,
      handleInputChange
    };
  }
});
</script>

<style scoped>
.search-input {
  width: calc(100% - 3.5rem);
}
</style>
