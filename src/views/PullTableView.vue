<template>
  <table class="table  is-striped is-hoverable" v-if="leData.issues.length">
    <thead>
      <tr>
        <DataTableHeader
          elementLabel="Number"
          sortFunctionLabel="sortByNumber"
          colSpan="1"
          @sortByNumber="sortByNumber"
        />
        <th colspan="1">
          <abbr title="">
            Title
          </abbr>
        </th>
        <DataTableHeader
          elementLabel="Author"
          sortFunctionLabel="sortByAuthor"
          colSpan="2"
          @sortByAuthor="sortByAuthor"
        />
        <DataTableHeader
          elementLabel="Comments"
          hassDefaultActiveName="comments"
          hassDefaultActiveMethod="des"
          sortFunctionLabel="sortByCommentCount"
          colSpan="1"
          @sortByCommentCount="sortByCommentCount"
        />
        <DataTableHeader
          elementLabel="Created"
          sortFunctionLabel="sortByCreatedAt"
          colSpan="1"
          @sortByCreatedAt="sortByCreatedAt"
        />
        <th colspan="1">
          <abbr title="">
            State
          </abbr>

          <div class="dropdown" :class="{ 'is-active': isActive }">
            <div class="dropdown-trigger">
              <button
                @click.prevent="toggleMenu"
                class="button is-borderless is-shadowless is-small"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
              >
                <span class="icon is-small">
                  <i class="arrow down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div
              class="dropdown-menu"
              id="dropdown-menu"
              role="menu"
              style="position: absolute; left: -30px;"
            >
              <div class="dropdown-content" style="width: fit-content; ">
                <span class="dropdown-item">
                  <input
                    type="checkbox"
                    class="checkbox"
                    :checked="filterState[0]"
                    name="state"
                    @change="toggleFilterState(0)"
                  />
                  Open
                </span>
                <span class="dropdown-item">
                  <input
                    type="checkbox"
                    class="checkbox"
                    :checked="filterState[1]"
                    @change="toggleFilterState(1)"
                    name="state"
                  />
                  Closed
                </span>
                <span class="dropdown-item">
                  <input
                    type="checkbox"
                    class="checkbox"
                    :checked="filterState[2]"
                    @change="toggleFilterState(2)"
                    name="state"
                  />
                  Merged
                </span>
              </div>
            </div>
          </div>
        </th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th colspan="1">
          <abbr title="">
            Number
          </abbr>
        </th>
        <th colspan="1">
          <abbr title="">
            Title
          </abbr>
        </th>
        <th colspan="2">
          <abbr title="">
            Author
          </abbr>
        </th>
        <th colspan="1">
          <abbr title="">
            Comments
          </abbr>
        </th>
        <th colspan="1">
          <abbr title="">
            Created
          </abbr>
        </th>
        <th colspan="1">
          <abbr title="">
            State
          </abbr>
        </th>
      </tr>
    </tfoot>
    <tbody>
      <template v-for="(issue, idx) in leData.issues" :key="idx">
        <tr v-if="filterByState(issue.state)">
          <td colspan="1">
            {{ issue.number }}
          </td>
          <td colspan="2">
            {{ issue.title }}
          </td>
          <td colspan="1">
            {{ issue.author.login }}
          </td>
          <td colspan="1">
            {{ issue.comments.totalCount }}
          </td>
          <td colspan="1">
            {{ filters.filteredDate(issue.createdAt) }}
          </td>
          <td colspan="1">
            {{ issue.state }}
          </td>
        </tr>
      </template>
      <tr>
        <td v-if="loading">
          Loading...
        </td>
        <td v-else-if="error">
          Error!
        </td>
      </tr>
      <tr>
        <td colspan="7">
          <button
            :disabled="!hasNextPage"
            @click.prevent="loadMoreIssues"
            class="button is-primary"
            type="submit"
          >
            Load More
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import DataTableHeader from "@/components/DataTableHeader.vue";
import filters from "@/shared/helpers/filters";

export default defineComponent({
  name: "PullDataTable",
  components: {
    DataTableHeader
  },
  props: {
    issues: {
      type: Object,
      default() {
        return {};
      }
    },
    loading: {
      type: Boolean,
      default() {
        false;
      }
    },
    error: {
      type: Boolean,
      default() {
        false;
      }
    },
    hasNextPage: {
      type: Boolean,
      default() {
        false;
      }
    }
  },

  setup(props, context) {
    const loadMoreIssues = () => {
      context.emit("loadMoreIssues");
    };

    const leData = reactive({
      //@ts-expect-error declare types
      issues: props.issues
    });

    const sortByAuthor = (method: string) => {
      //@ts-expect-error declare types
      leData.issues.sort((a, b) => {
        if (a.author.login > b.author.login) {
          return 1;
        }
        if (a.author.login < b.author.login) {
          return -1;
        }
        return 0;
      });
      if (method === "des") {
        leData.issues.reverse();
      }
    };

    const sortByNumber = (method: string) => {
      //@ts-expect-error declare types
      leData.issues.sort((a, b) => {
        if (a.number > b.number) {
          return 1;
        }
        if (a.number < b.number) {
          return -1;
        }
        return 0;
      });

      if (method === "des") {
        leData.issues.reverse();
      }
    };

    const sortByCreatedAt = (method: string) => {
      //@ts-expect-error declare types
      leData.issues.sort((a, b) => {
        if (a.createdAt > b.createdAt) {
          return 1;
        }
        if (a.createdAt < b.createdAt) {
          return -1;
        }
        return 0;
      });
      if (method === "des") {
        leData.issues.reverse();
      }
    };

    const sortByCommentCount = (method: string) => {
      //@ts-expect-error declare types
      leData.issues.sort((a, b) => {
        // console.log(a);
        if (a.comments.totalCount > b.comments.totalCount) {
          return 1;
        }
        if (a.comments.totalCount < b.comments.totalCount) {
          return -1;
        }
        return 0;
      });

      if (method === "des") {
        leData.issues.reverse();
      }
    };

    const filterState = ref([true, false]);
    const toggleFilterState = (idx: number): void => {
      filterState.value[idx] = !filterState.value[idx];
      // vue known issue with checkboxes
      // if (filterState.value.every(item => item === false)) {
      //   filterState.value.fill(true);
      // }
    };

    const filterByState = (state: string) => {
      if (state === "OPEN" && filterState.value[0] === true) {
        return true;
      } else if (state === "CLOSED" && filterState.value[1] === true) {
        return true;
      } else if (state === "MERGED" && filterState.value[2] === true) {
        return true;
      }
      return false;
    };

    const isActive = ref(false);
    const toggleMenu = (): void => {
      isActive.value = !isActive.value;
    };

    return {
      loadMoreIssues,
      leData,
      sortByAuthor,
      sortByNumber,
      sortByCreatedAt,
      sortByCommentCount,
      filters,
      filterState,
      toggleFilterState,
      isActive,
      filterByState,
      toggleMenu
    };
  }
});
</script>

<style></style>
