<template>
  <div class="loader" :style="loaderStyle">
    <img v-if="hasImage" src="@/assets/empty.png" alt="Empty.png" />
    <div class="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue';

export default defineComponent({
  name: 'PureLoader',
  props: {
    loaderColor: {
      default: '#fff',
    },
    bgColor: {
      default: 'rgba(0, 0, 0, 0.5)',
    },
    hasImage: {
      default: false,
    },
  },
  setup(props) {
    const { loaderColor, bgColor } = toRefs(props);

    return {
      loaderStyle: computed(() => {
        return {
          '--loader-color': loaderColor.value,
          '--bg-color': bgColor.value,
        };
      }),
    };
  },
});
</script>

<style lang="scss" scoped>
.loader {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: var(--loader-color);
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%,
  100% {
    top: 24px;
    height: 32px;
  }
}
</style>
