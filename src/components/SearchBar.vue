<template>
  <nav class="panel">
    <p class="panel-heading">
      Find Repositories
    </p>
    <div class="panel-block has-background-grey">
      <form class="">
        <div class="level">
          <div class="level-item">
            <div class="columns ">
              <div class="column">
                <span
                  style="top: 3px"
                  class="title is-6 is-relative is-inline-block has-background-white has-text-grey-light	has-width-100 pl-3"
                  >Token</span
                >
                <input
                  v-model="searchData.token"
                  class="input is-borderless is-shadowless is-radiusless has-border-colour-white"
                  type="text"
                  placeholder="Your GitHub Token"
                />
              </div>
              <div class="column">
                <span
                  style="top: 3px"
                  class="title is-6 is-relative is-inline-block has-background-white has-text-grey-light	has-width-100 pl-3"
                  >Search for...</span
                >
                <input
                  v-model="searchData.repo"
                  class="input is-borderless is-shadowless is-radiusless has-border-colour-white"
                  type="text"
                  placeholder="Ex. React"
                />
              </div>
            </div>
            <div class="column">
              <div class="">
                <button
                  class="button  is-primary is-normal is-rounded"
                  type="submit"
                  :disabled="enableSubmission()"
                  @click.prevent="handleInputChange"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { SearchData } from "@/shared/modeling/model-common";
import { StorageService } from "@/shared/services/storage-service";

export default defineComponent({
  name: "SearchBar",
  setup(props, context) {
    const storageSrv = new StorageService();
    //@ts-expect-error types
    const searchData: SearchData = reactive({
      token: storageSrv.getApiToken(),
      repo: storageSrv.getSearchTerm()
    });

    const enableSubmission = (): boolean => {
      return (
        searchData.token == null ||
        searchData.token == "" ||
        searchData.repo == null ||
        searchData.repo == ""
      );
    };

    const handleInputChange = () => {
      context.emit("search", searchData);
    };
    return {
      searchData,
      handleInputChange,
      enableSubmission
    };
  }
});
</script>

<style scoped>
.search-input {
  width: calc(100% - 3.5rem);
}
</style>
