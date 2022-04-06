<template>
  <div class="layout">
    <div class="layout__sidebar"><HomeSidebar /></div>
    <div class="layout__content">
      <div class="layout__header"><HomeHeader /></div>
      <div class="layout__results">
        <TracksView />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store/index';
import { defineAsyncComponent } from '@vue/runtime-core';

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
  },
  setup() {
    const store = useStore();

    (async () => {
      await store.dispatch('fetchTracks', 'Grupo 5');
    })();
  },
});
</script>

<style lang="scss" scoped>
$sidebar-width: 300px;
$header-height: 90px;

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
  }
}
</style>
