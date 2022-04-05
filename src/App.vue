<template>
  <div class="main">
    <span v-if="isLoaded"><HomeLayout /></span>
    <span v-else>cargando...</span>
  </div>
</template>

<script lang="ts">
import { computed, defineAsyncComponent, defineComponent } from 'vue';
import { useStore } from '@/store/index';
import { Deezer } from '@/shared/interfaces';

declare global {
  interface Window {
    dzAsyncInit: unknown;
  }
}

declare const DZ: Deezer;

export default defineComponent({
  name: 'App',
  components: {
    HomeLayout: defineAsyncComponent(() => import('@/layouts/HomeLayout.vue')),
  },
  setup() {
    const store = useStore();

    window.dzAsyncInit = async () => {
      DZ.init({
        appId: '535602',
        channelUrl: 'http://localhost:8080/channel.html',
        player: {
          onload: () => {
            console.log('DZ isready!');
            store.commit('setDzOBj', DZ);
          },
        },
      });
    };

    (() => {
      const e = document.createElement('script');
      e.src = 'https://e-cdns-files.dzcdn.net/js/min/dz.js';
      e.async = true;
      document.getElementById('dz-root')?.appendChild(e);
    })();

    return {
      isLoaded: computed(() => store.state.DZ),
    };
  },
});
</script>

<style lang="scss"></style>
