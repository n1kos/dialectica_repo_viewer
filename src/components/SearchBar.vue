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
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchBar",
  data() {
    return {
      searchData: {
        token: "",
        repo: ""
      }
    };
  },
  methods: {
    handleInputChange() {
      this.$emit("search", this.searchData);
    }
  }
});
</script>

<style scoped>
.search-input {
  width: calc(100% - 3.5rem);
}
</style>
