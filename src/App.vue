<template>
  <div class="main">
    <HomeLayout v-if="isLoaded" />
    <PureLoader
      v-else
      :has-image="true"
      loader-color="#232406"
      bg-color="#fadd69"
    />
    <PureLoader v-if="isLoading && isLoaded" />
  </div>
  !
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
    PureLoader: defineAsyncComponent(() => import('@/layouts/PureLoader.vue')),
  },
  setup() {
    const store = useStore();

    const channelUrl =
      process.env.NODE_ENV === 'production'
        ? 'https://joseff361.github.io/world-app/channel.html'
        : 'http://localhost:8080/channel.html';

    console.log('channelUrl', channelUrl);

    window.dzAsyncInit = async () => {
      DZ.init({
        appId: '535602',
        channelUrl: channelUrl,
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
      isLoading: computed(() => store.state.isLoading),
    };
  },
});
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
