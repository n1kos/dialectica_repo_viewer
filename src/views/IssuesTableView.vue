<template>
  <table class="table  is-striped is-hoverable" v-if="issues.length">
    <thead>
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
      <tr v-for="(issue, idx) in issues" :key="idx">
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
          {{ issue.createdAt }}
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
import { defineComponent, reactive, toRefs } from "vue";

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

    return {
      loadMoreIssues
    };
  }
});
</script>

<style></style>
