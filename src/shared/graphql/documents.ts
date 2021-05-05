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
    stargazerCount
    viewerHasStarred
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

const PULL_FRAGMENT = gql`
  fragment pulls on PullRequest {
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

export const SEARCH_REPOS_PULL_MORE = gql`
  ${PULL_FRAGMENT}

  query SearchRepoPullsMore(
    $first: Int!
    $after: String
    $owner: String!
    $name: String!
  ) {
    repository(owner: $owner, name: $name) {
      pullRequests(
        first: $first
        after: $after
        orderBy: { field: COMMENTS, direction: DESC }
      ) {
        nodes {
          ...pulls
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

export const SEARCH_REPOS_FORKS_MORE = gql`
  query SearchRepoForksMore(
    $first: Int!
    $after: String
    $owner: String!
    $name: String!
  ) {
    repository(owner: $owner, name: $name) {
      forks(first: $first, after: $after) {
        nodes {
          createdAt
          stargazerCount
          nameWithOwner
          description
          isPrivate
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

export const ADD_STAR = gql`
  mutation($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

export const REMOVE_STAR = gql`
  mutation($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;
