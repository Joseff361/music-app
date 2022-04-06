import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { Deezer, Track } from '@/shared/interfaces';

export interface State {
  album: unknown;
  tracks: Track[];
  currentTrack: Track;
  DZ: Deezer | null;
  isLoading: boolean;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    album: null,
    tracks: [],
    currentTrack: {} as Track,
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
    setCurrentTrack: (state, track: Track) => {
      state.currentTrack = track;
    },
  },
  actions: {
    fetchTracks: async ({ commit, state }, trackName) => {
      commit('setLoad', true);
      try {
        state.DZ?.api(`/search/track?q=${trackName}`, async response => {
          const { data } = response;
          if (data.length > 0) commit('setTracks', data);
          commit('setLoad', false);
        });
      } catch (e) {
        console.log(e);
        commit('setLoad', false);
      }
    },
  },
  modules: {},
});

export function useStore() {
  return baseUseStore(key);
}
