import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { RepoDataRequest } from "@/shared/modeling/model-static";

// define your typings for the store state
export interface State {
  count: number;
  repositories: Array<RepoDataRequest>;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 0,
    repositories: []
  },
  mutations: {
    increment(state, payload) {
      state.count++;
    },
    fillRepositories(state, payload) {
      state.repositories = payload;
    }
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
    fillRepositories({ commit }) {
      commit("fillRepositories");
    }
  },
  getters: {
    counter(state) {
      return state.count;
    },
    filledRepositories(state) {
      return state.repositories;
    }
  }
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}

/**
 * 
 * // in a vue component
import { useStore } from './store'
import { RepoData } from '../shared/modeling/model-static';

export default {
  setup () {
    const store = useStore()

    store.state.count // typed as number
  }
}
 */
