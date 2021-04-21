import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

// define your typings for the store state
export interface State {
  count: number;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 0
  },
  mutations: {
    increment(state, payload) {
      state.count++;
    }
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    }
  },
  getters: {
    counter(state) {
      return state.count;
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

export default {
  setup () {
    const store = useStore()

    store.state.count // typed as number
  }
}
 */
