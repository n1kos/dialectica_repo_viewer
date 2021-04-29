<template>
  <table class="table  is-striped is-hoverable" v-if="leData.issues.length">
    <thead>
      <tr>
        <th colspan="1">
          <abbr title="">
            Number
          </abbr>
          <button @click.prevent="sortByNumber('asc')" type="submit">
            Sort
          </button>
          <button @click.prevent="sortByNumber('des')" type="submit">
            Sort
          </button>
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
          <button @click.prevent="sortByAuthor('asc')" type="submit">
            Sort
          </button>
          <button @click.prevent="sortByAuthor('des')" type="submit">
            Sort
          </button>
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
          <button @click.prevent="sortByCreatedAt('asc')" type="submit">
            Sort
          </button>
          <button @click.prevent="sortByCreatedAt('des')" type="submit">
            Sort
          </button>
        </th>
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

export default defineComponent({
  name: "IssuesDataTable",
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
        console.log(a);
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
        console.log(a);
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
        console.log(a);
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
