<template>
  <div class="home">
    <span class="title is-3">
      Find
      <span class="title is 2">GitHub</span>
      Repositories:
    </span>
    <SearchBar @search="search" />
    <RepositoryList />
    <!-- <Repository :repository="{}" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "@/components/SearchBar.vue";
import RepositoryList from "@/components/RepositoryList.vue";
import { SearchData } from "@/shared/modeling/model-common";
import { StorageService } from "@/shared/services/storage-service";
// import Repository from "@/components/Repository.vue";

export default defineComponent({
  name: "Home",
  components: {
    SearchBar,
    RepositoryList
    // Repository
  },
  setup() {
    const storageSrv = new StorageService();
    const search = (query: SearchData) => {
      storageSrv.clear();
      storageSrv.setApiToken(query.token);
      storageSrv.setSearchTerm(query.repo);
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
