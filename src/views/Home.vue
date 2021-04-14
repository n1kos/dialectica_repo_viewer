<template>
  <div class="home">
    <h1 class="">
      Find
      <span class="">GitHub</span>
      Repositories:
    </h1>
    <SearchBar @search="search" />
    <RepositoryList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "@/components/SearchBar.vue";
import RepositoryList from "@/components/RepositoryList.vue";
import { SearchData } from "@/shared/modeling/model-common";
import { StorageService } from "@/shared/services/storage-service";

export default defineComponent({
  name: "Home",
  components: {
    SearchBar,
    RepositoryList
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
