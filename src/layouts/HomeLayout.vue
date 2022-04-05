<template>layout</template>

<script>
import { useStore } from '@/store/index';

export default {
  setup() {
    const store = useStore();

    (async () => {
      await store.dispatch('fetchTracks', 'eminem');
    })();
  },
};
</script>

<style></style>
