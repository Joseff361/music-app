<template>
  <div class="player">
    <div class="player__description">
      <img :src="cover" alt="Cover Track" />
      <div class="player__description__info">
        <strong>{{ title }}</strong>
        <span>{{ album }}</span>
      </div>
    </div>
    <div class="player__actions">
      <i class="fa-solid fa-backward" @click="prev"></i>
      <i
        v-if="isPlaying"
        class="fa-solid fa-circle-pause player__actions__play"
        @click="pause"
      ></i>
      <i
        v-else
        class="fa-solid fa-circle-play player__actions__play"
        @click="play"
      ></i>
      <i class="fa-solid fa-forward" @click="next"></i>
    </div>
    <div class="player__config">
      <input
        type="range"
        min="0"
        max="100"
        v-model="volume"
        @change="changeVolume"
      />
      <i :class="volumenIcon" @click="changeVolState"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { computed, defineComponent, ref, watch } from 'vue';
import { satinize } from '@/helpers';

export default defineComponent({
  name: 'MusicPlayer',
  setup() {
    const store = useStore();
    const isPlaying = ref(true);
    const volume = ref(15);
    const audio = computed(() => store.state.currentTrack.preview);
    const volumenIcon = ref('fa-solid fa-volume-low');

    const maxIndex = store.state.tracks.length;
    const player = new Audio();

    const play = (): void => {
      changeVolume();
      player.play();
      isPlaying.value = true;
    };

    const pause = (): void => {
      player.pause();
      isPlaying.value = false;
    };

    const next = (): void => {
      const currentIndex = store.state.tracks.findIndex(
        track => track.id === store.state.currentTrack.id
      );

      if (currentIndex + 1 === maxIndex) {
        store.commit('setCurrentTrack', store.state.tracks[0]);
      } else {
        store.commit('setCurrentTrack', store.state.tracks[currentIndex + 1]);
      }
    };

    const prev = (): void => {
      const currentIndex = store.state.tracks.findIndex(
        track => track.id === store.state.currentTrack.id
      );

      if (currentIndex === 0) {
        store.commit('setCurrentTrack', store.state.tracks[maxIndex - 1]);
      } else {
        store.commit('setCurrentTrack', store.state.tracks[currentIndex - 1]);
      }
    };

    const updateIcon = (): void => {
      volumenIcon.value =
        player.volume > 0.6
          ? 'fa-solid fa-volume-high'
          : player.volume > 0
          ? 'fa-solid fa-volume-low'
          : 'fa-solid fa-volume-xmark';
    };

    const changeVolume = (): void => {
      player.volume = volume.value / 100;
      updateIcon();
    };

    const changeVolState = (): void => {
      player.volume = player.volume > 0 ? 0 : volume.value / 100;
      updateIcon();
    };

    watch(audio, () => {
      player.src = audio.value;
      play();
    });

    return {
      cover: computed(
        (): string => store.state.currentTrack.album.cover_medium
      ),
      title: computed((): string => satinize(store.state.currentTrack.title)),
      album: computed((): string =>
        satinize(store.state.currentTrack.album.title)
      ),
      volume,
      audio,
      isPlaying,
      volumenIcon,
      play,
      pause,
      next,
      prev,
      changeVolume,
      changeVolState,
    };
  },
});
</script>

<style lang="scss" scoped>
.player {
  height: 100%;
  background-color: var(--secondary-color);
  display: flex;

  &__description {
    width: 20%;
    display: flex;

    & img {
      width: 97px;
    }

    &__info {
      display: flex;
      padding-left: 10px;
      flex-direction: column;
      justify-content: center;

      & strong {
        font-size: 12px;
      }

      & span {
        font-size: 10px;
      }
    }
  }

  &__actions {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    & i {
      cursor: pointer;
      font-size: 1.7rem;
      color: var(--primary-color);
    }

    &__play {
      font-size: 4rem !important;
      border-radius: 50%;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    }
  }

  &__config {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    & i {
      cursor: pointer;
      font-size: 2rem;
      color: var(--primary-color);
    }
  }
}
</style>
