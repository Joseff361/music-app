import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

export interface State {
  album: unknown;
  tracks: unknown;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    album: null,
    tracks: null,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});

export function useStore() {
  return baseUseStore(key);
}
