<template>
  <header class="header">
    <input type="text" v-model="track" @keypress.enter="searchTrack" />
  </header>
</template>
<script lang="ts">
import { useStore } from '@/store';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HomeHeader',
  setup() {
    const store = useStore();
    const track = ref('');

    const searchTrack = async () => {
      await store.dispatch('fetchTracks', track.value);
    };

    return {
      track,
      searchTrack,
    };
  },
});
</script>
