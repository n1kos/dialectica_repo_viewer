<template>
  <!-- <div>
    {{ issues }}
  </div> -->
  <table class="table" v-if="issues.length">
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
          {{ issue.node.number }}
        </td>
        <td colspan="2">
          {{ issue.node.title }}
        </td>
        <td colspan="1">
          {{ issue.node.author.login }}
        </td>
        <td colspan="1">
          {{ issue.node.comments.totalCount }}
        </td>
        <td colspan="1">
          {{ issue.node.createdAt }}
        </td>
        <td colspan="1">
          {{ issue.node.state }}
        </td>
        <!-- <td>
        {{ issue }}
      </td> -->
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IssuesDataTable",
  props: {
    issues: {
      type: Object,
      default() {
        return {};
      }
    }
  }
});
</script>

<style></style>
