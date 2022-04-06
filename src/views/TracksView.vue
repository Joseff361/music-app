<template>
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
}
</style>
