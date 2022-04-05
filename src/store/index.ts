import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { Deezer } from '@/shared/interfaces';

export interface State {
  album: unknown;
  tracks: unknown;
  DZ: Deezer | null;
  isLoading: boolean;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    album: null,
    tracks: null,
    DZ: null,
    isLoading: false,
  },
  getters: {},
  mutations: {
    setDzOBj: (state, DZ: Deezer) => {
      state.DZ = DZ;
    },
  },
  actions: {
    fetchTracks: async ({ commit, state }, track) => {
      try {
        state.DZ?.api('/search/track?q=eminem', async response => {
          console.log(response);
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {},
});

export function useStore() {
  return baseUseStore(key);
}
