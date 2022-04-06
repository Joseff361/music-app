<template>
  <header class="header">
    <input
      type="text"
      v-model="track"
      @keypress.enter="searchTrack"
      placeholder="Search your favorite song..."
    />
    <div class="header__link">
      <a href="https://www.deezer.com/en/" target="_blank">
        <img src="@/assets/deezer-logo.png" alt="Deezer Logo" />
      </a>
    </div>
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
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  background-color: #fff;

  & input {
    appearance: none;
    border: none;
    outline: none;
    background: none;

    width: 80%;
    background-color: #f3f3f3;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    padding: 15px;
    border-radius: 8px;
    color: #313131;
    font-size: 20px;
    transition: 0.4s;

    &::placeholder {
      color: #aaa;
    }

    &:focus {
      color: #fff;
      background-color: #313131;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
    }
  }

  &__link {
    width: 20%;

    & a {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & img {
      max-width: 60%;
    }
  }
}
</style>
