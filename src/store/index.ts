import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { Deezer, Track } from '@/shared/interfaces';

export interface State {
  album: unknown;
  tracks: Track[];
  DZ: Deezer | null;
  isLoading: boolean;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    album: null,
    tracks: [],
    DZ: null,
    isLoading: false,
  },
  getters: {},
  mutations: {
    setDzOBj: (state, DZ: Deezer) => {
      state.DZ = DZ;
    },
    setTracks: (state, tracks: Track[]) => {
      state.tracks = tracks;
    },
    setLoad: (state, value: boolean) => {
      state.isLoading = value;
    },
  },
  actions: {
    fetchTracks: async ({ commit, state }, trackName) => {
      commit('setLoad', true);
      try {
        state.DZ?.api(`/search/track?q=${trackName}`, async response => {
          const { data } = response;
          commit('setTracks', data);
        });
      } catch (e) {
        console.log(e);
      } finally {
        commit('setLoad', false);
      }
    },
  },
  modules: {},
});

export function useStore() {
  return baseUseStore(key);
}
