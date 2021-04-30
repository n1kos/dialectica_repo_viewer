<template>
  <table class="table  is-striped is-hoverable" v-if="leData.issues.length">
    <thead>
      <tr>
        <DataTableHeader
          elementLabel="Name/Owner"
          sortFunctionLabel="sortByRepoAndOwner"
          colSpan="2"
          @sortByRepoAndOwner="sortByRepoAndOwner"
        />
        <th colspan="1">
          <abbr title="">
            Description
          </abbr>
        </th>
        <DataTableHeader
          elementLabel="Wacthers"
          sortFunctionLabel="sortByStarGazerCount"
          colSpan="1"
          @sortByStarGazerCount="sortByStarGazerCount"
        />
        <DataTableHeader
          elementLabel="Created"
          sortFunctionLabel="sortByCreatedAt"
          colSpan="1"
          @sortByCreatedAt="sortByCreatedAt"
        />
        <th colspan="1">
          <abbr title="">
            Privacy
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
                  Public
                </span>
                <span class="dropdown-item">
                  <input
                    type="checkbox"
                    class="checkbox"
                    :checked="filterState[1]"
                    @change="toggleFilterState(1)"
                    name="state"
                  />
                  Private
                </span>
              </div>
            </div>
          </div>
        </th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th colspan="2">
          <abbr title="">
            Repo And Owner
          </abbr>
        </th>
        <th colspan="1">
          <abbr title="">
            Description
          </abbr>
        </th>
        <th colspan="1">
          <abbr title="">
            Watchers
          </abbr>
        </th>
        <th colspan="1">
          <abbr title="">
            Created
          </abbr>
        </th>
        <th colspan="1">
          <abbr title="">
            Privacy
          </abbr>
        </th>
      </tr>
    </tfoot>
    <tbody>
      <template v-for="(issue, idx) in leData.issues" :key="idx">
        <tr v-if="filterByState(issue.isPrivate)">
          <td colspan="1">
            {{ issue.nameWithOwner }}
          </td>
          <td colspan="2">
            {{ issue.description }}
          </td>
          <td colspan="1">
            {{ issue.stargazerCount }}
          </td>
          <td colspan="1">
            {{ filteredDate(issue.createdAt) }}
          </td>
          <td colspan="1">
            {{ filteredState(issue.isPrivate) }}
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
export default defineComponent({
  name: "ForksDataTable",
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

    const sortByRepoAndOwner = (method: string) => {
      //@ts-expect-error declare types
      leData.issues.sort((a, b) => {
        if (a.nameWithOwner > b.nameWithOwner) {
          return 1;
        }
        if (a.nameWithOwner < b.nameWithOwner) {
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

    const sortByStarGazerCount = (method: string) => {
      //@ts-expect-error declare types
      leData.issues.sort((a, b) => {
        // console.log(a);
        if (a.stargazerCount > b.stargazerCount) {
          return 1;
        }
        if (a.stargazerCount < b.stargazerCount) {
          return -1;
        }
        return 0;
      });

      if (method === "des") {
        leData.issues.reverse();
      }
    };

    const filteredDate = (d: string) => {
      const theDate = new Date(d);
      const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
        theDate
      );
      const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(
        theDate
      );
      const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(
        theDate
      );
      return `${da}-${mo}-${ye}`;
    };

    const filteredState = (d: boolean) => {
      const mapped = ["Public", "Private"];
      const idx = d ? 1 : 0;
      return mapped[idx];
    };

    const filterState = ref([true, false]);
    const toggleFilterState = (idx: number): void => {
      filterState.value[idx] = !filterState.value[idx];
      // vue known issue with checkboxes
      // if (filterState.value.every(item => item === false)) {
      //   filterState.value.fill(true);
      // }
    };

    const filterByState = (state: boolean): boolean => {
      if (state === false && filterState.value[0] === true) {
        return true;
      } else if (state === true && filterState.value[1] === true) {
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
      sortByRepoAndOwner,
      sortByCreatedAt,
      sortByStarGazerCount,
      filteredDate,
      filterState,
      toggleFilterState,
      isActive,
      filterByState,
      filteredState,
      toggleMenu
    };
  }
});
</script>

<style></style>
