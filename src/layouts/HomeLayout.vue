<template>
  <div class="layout">
    <div class="layout__sidebar"><HomeSidebar /></div>
    <div class="layout__content">
      <div class="layout__header"><HomeHeader /></div>
      <div class="layout__results">
        <TracksView />
      </div>
    </div>
    <div v-if="currentTrack" class="layout__player">
      <MusicPlayer />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store/index';
import { computed, defineAsyncComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'HomeLayout',
  components: {
    HomeHeader: defineAsyncComponent(
      () => import('@/components/HomeHeader.vue')
    ),
    HomeSidebar: defineAsyncComponent(
      () => import('@/components/HomeSidebar.vue')
    ),
    TracksView: defineAsyncComponent(() => import('@/views/TracksView.vue')),
    MusicPlayer: defineAsyncComponent(
      () => import('@/components/MusicPlayer.vue')
    ),
  },
  setup() {
    const store = useStore();

    (async () => {
      await store.dispatch('fetchTracks', 'Los Outsaiders');
    })();

    return {
      currentTrack: computed(() => store.state.currentTrack),
    };
  },
});
</script>

<style lang="scss" scoped>
$sidebar-width: 300px;
$header-height: 90px;
$player-height: 97px;

.layout {
  display: flex;

  &__sidebar {
    width: $sidebar-width;
    height: 100%;
    background-color: var(--primary-color);
    position: fixed;
  }

  &__content {
    margin-left: $sidebar-width;
    width: calc(100% - $sidebar-width);
  }

  &__header {
    position: fixed;
    width: calc(100% - $sidebar-width);
    height: $header-height;
  }

  &__results {
    margin-top: $header-height;
    margin-bottom: $player-height;
  }

  &__player {
    position: fixed;
    bottom: 0;
    height: $player-height;
    width: 100%;
  }
}
@media only screen and (max-width: 992px) {
  .layout {
    &__sidebar {
      display: none;
    }

    &__content {
      margin-left: 0px;
      width: 100%;
    }

    &__header {
      width: 100%;
    }
  }
}
</style>
