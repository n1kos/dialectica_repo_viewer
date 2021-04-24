import gql from "graphql-tag";

const REPO_FRAGMENT = gql`
  fragment repo on Repository {
    id
    name: nameWithOwner
    owner {
      id
      login
    }
    url
    description
    forkCount
    createdAt
    issues(states: OPEN) {
      totalCount
    }
    pullRequests(states: OPEN) {
      totalCount
    }
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

export const SEARCH_REPOS_ISSUES = gql`
  query SearchRepoIssuesQuery($last: Int!, $owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      issues(last: $last, states: OPEN) {
        edges {
          node {
            title
            author {
              login
            }
            url
            labels(first: 1) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;
