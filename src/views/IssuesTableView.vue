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
        <th colspan="1">
          <abbr title="">
            Comments
          </abbr>
        </th>
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
      <tr v-for="(issue, idx) in leData.issues" :key="idx">
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
          {{ filteredDate(issue.createdAt) }}
        </td>
        <td colspan="1">
          {{ issue.state }}
        </td>
      </tr>
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
import { defineComponent, reactive } from "vue";
import DataTableHeader from "@/components/DataTableHeader.vue";
export default defineComponent({
  name: "IssuesDataTable",
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
        // console.log(a);
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
      // console.log(method);

      //@ts-expect-error declare types
      leData.issues.sort((a, b) => {
        // console.log(a);
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
        // console.log(a);
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

    return {
      loadMoreIssues,
      leData,
      sortByAuthor,
      sortByNumber,
      sortByCreatedAt,
      filteredDate
    };
  }
});
</script>

<style></style>
