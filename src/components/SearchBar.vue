<template>
  <form class="">
    <div class="columns">
      <div class="column">
        <span class="title is-6">Token</span>
        <input
          v-model="searchData.token"
          class="input"
          type="text"
          placeholder="Token"
        />
      </div>
      <div class="column">
        <span class="title is-6">Search Term</span>
        <input
          v-model="searchData.repo"
          class="input"
          type="text"
          placeholder="Ex. React"
        />
      </div>
    </div>
    <button
      class="button  is-primary is-large is-rounded"
      type="submit"
      @click.prevent="handleInputChange"
    >
      Search
    </button>
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
