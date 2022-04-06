<template>
  <div @click="$emit('track-selected', id)" class="card">
    <img :src="image" alt="Card Image" />
    <div class="card__body">
      <strong class="card__title">{{ title }}</strong>
      <div class="card__author">{{ author }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MusicCard',
  emits: ['track-selected'],
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;

  & img {
    max-width: 100%;
    height: auto;
  }

  &__author {
    font-size: 13px;
    color: rgba($color: #000000, $alpha: 0.5);
  }
}
</style>
