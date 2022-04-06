<template>
  <div class="tracks__title"><strong>Music</strong><span>App</span></div>
  <div class="tracks">
    <div v-for="track in tracks" :key="track" class="tracks__card">
      <MusicCard
        :image="track.album.cover_big"
        :title="track.title"
        :author="track.artist.name"
        :id="track.id"
        @track-selected="selectTrack"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { computed, defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'TracksView',
  components: {
    MusicCard: defineAsyncComponent(() => import('@/components/MusicCard.vue')),
  },
  setup() {
    const store = useStore();

    const selectTrack = (trackId: number) => {
      const track = store.state.tracks.find(track => track.id === trackId);
      if (track) store.commit('setCurrentTrack', track);
    };

    return {
      tracks: computed(() => store.state.tracks),
      selectTrack,
    };
  },
});
</script>

<style lang="scss" scoped>
.tracks {
  padding: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;

  &__title {
    display: none;
  }
}

@media only screen and (max-width: 1200px) {
  .tracks {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media only screen and (max-width: 992px) {
  .tracks {
    &__title {
      display: block;
      width: 100%;
      display: flex;
      justify-content: center;
      font-size: 3rem;
      font-weight: 900;

      & strong {
        color: var(--secondary-color);
      }

      & span {
        color: #313131;
      }
    }
  }
}

@media only screen and (max-width: 576px) {
  .tracks {
    padding: 20px;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
