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

export default defineComponent({
  name: "SearchBar",
  setup(props, context) {
    const searchData: SearchData = reactive({
      token: "",
      // TODO: change to-->repo: "react"
      repo: "react"
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
