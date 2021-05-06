import { AddStarPayload, RemoveStarPayload } from "@octokit/graphql-schema";
export interface SearchData {
  token: string;
  repo: string;
}
export interface CacheData {
  [propName: string]: AddStarPayload | RemoveStarPayload;
}
export interface QueryVariables {
  [propName: string]: number | string;
}
