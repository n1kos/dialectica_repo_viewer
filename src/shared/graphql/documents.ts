import gql from "graphql-tag";

const REPO_FRAGMENT = gql`
  fragment repo on Repository {
    id
    name
    nameWithOwner
    owner {
      id
      login
    }
    url
    description
    forkCount
    createdAt
    issues {
      totalCount
    }
    pullRequests {
      totalCount
    }
  }
`;

const ISSUES_FRAGMENT = gql`
  fragment issues on Issue {
    comments {
      totalCount
    }
    author {
      login
    }
    createdAt
    state
    number
    title
  }
`;

export const SEARCH_REPOS = gql`
  ${REPO_FRAGMENT}

  query SearchRepoQuery($query: String!, $limit: Int!) {
    search(query: $query, type: REPOSITORY, first: $limit) {
      edges {
        node {
          ...repo
        }
      }
    }
  }
`;

export const SEARCH_REPOS_ISSUES_MORE = gql`
  ${ISSUES_FRAGMENT}

  query SearchRepoIssuesMore(
    $first: Int!
    $after: String
    $owner: String!
    $name: String!
  ) {
    repository(owner: $owner, name: $name) {
      issues(
        first: $first
        after: $after
        orderBy: { field: COMMENTS, direction: DESC }
      ) {
        nodes {
          ...issues
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;
