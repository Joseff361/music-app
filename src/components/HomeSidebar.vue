<template>
  <aside class="sidebar">
    <div class="sidebar__title"><strong>Music</strong><span>App</span></div>
    <div class="sidebar__img">
      <img src="@/assets/working.jpg" alt="Page Logo" />
    </div>
  </aside>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeSidebar',
});
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;

  &__title {
    padding-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 3rem;
    font-weight: 900;
    text-shadow: 2px 1px 10px #313131;

    & strong {
      color: var(--secondary-color);
    }

    & span {
      color: #fff;
    }
  }

  &__img {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;

    & img {
      max-width: 50%;
      height: auto;
      border-radius: 50%;
    }
  }
}
</style>
