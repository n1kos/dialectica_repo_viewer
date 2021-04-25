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
      <tr>
        <td colspan="7">
          <button
            @click.prevent="loadMoreIssues"
            class="is-primary"
            type="submit"
          >
            Load More
          </button>
        </td>
      </tr>
      <tr v-if="loading">
        <td>
          loading
        </td>
      </tr>
      <tr v-else>
        <td>
          {{ issuesMore }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import { SEARCH_REPOS_ISSUES_MORE } from "@/shared/graphql/documents";

export default defineComponent({
  name: "IssuesDataTable",
  props: {
    issues: {
      type: Object,
      default() {
        return {};
      }
    },
    searchOptions: {
      type: Object,
      default() {
        return {
          owner: "",
          name: "",
          first: 20
        };
      }
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props: { searchOptions: Record<string, any> }) {
    // const searchOptions = {
    //   //@ts-expect-error need to add the issue interface
    //   owner: repository.value.node.owner.login,
    //   //@ts-expect-error need to add the issue interface
    //   name: repository.value.node.name,
    //   first: 20
    // };
    const { searchOptions } = { ...toRefs(props) };

    console.log(searchOptions.value);

    const { result, loading, error } = useQuery<{}>(SEARCH_REPOS_ISSUES_MORE, {
      ...searchOptions.value,
      after: "Y3Vyc29yOnYyOpHOAOp4ag=="
    });

    const issuesMore = useResult(
      result,
      [],
      //@ts-expect-error need to add the issue interface
      data => data.repository.issues.edges
    );
    return {
      error,
      loading,
      issuesMore
    };
  }
  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // setup(props: any, context: any) {
  //   const searchOptions = reactive({
  //     ...context.searchOptions,
  //     cursor: "Y3Vyc29yOnYyOpHOAOp4ag=="
  //   });
  //   const loadMoreIssues = () => {
  //     const { result, loading, error } = useQuery<{}>(
  //       SEARCH_REPOS_ISSUES_MORE,
  //       searchOptions
  //     );

  //     const issues = useResult(
  //       result,
  //       [],
  //       //@ts-expect-error need to add the issue interface
  //       data => data.repository.issues.edges
  //     );

  //     console.log(issues);

  //     return issues;
  //   };
  //   return { loadMoreIssues };
  // }
});
</script>

<style></style>
