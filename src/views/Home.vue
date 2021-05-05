<template>
  <div class="home">
    <SearchBar @search="search" />
    <RepositoryList :search-options="searchOptions" />
    <!-- <Repository :repository="{}" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import SearchBar from "@/components/SearchBar.vue";
import RepositoryList from "@/components/RepositoryList.vue";
import { SearchData } from "@/shared/modeling/model-common";
import { StorageService } from "@/shared/services/storage-service";

export default defineComponent({
  name: "Home",
  components: {
    SearchBar,
    RepositoryList
    // Repository
  },
  setup() {
    const storageSrv = new StorageService();
    const searchOptions = reactive({
      query: storageSrv.getSearchTerm(),
      limit: 10
    });

    const search = (query: SearchData) => {
      storageSrv.clear();
      storageSrv.setApiToken(query.token);
      storageSrv.setSearchTerm(query.repo);
      searchOptions.query = query.repo;
      console.log("I am searching for ", query);
    };

    return {
      searchOptions,
      search
    };
  }
});
</script>

<style lang="scss"></style>
