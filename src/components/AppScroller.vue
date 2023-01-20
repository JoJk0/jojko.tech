<template>
  <div class="app-scroller" :class="{ mobile }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
// const props = defineProps({})

// const emit = defineEmits({})

const { mobile } = useDisplay()
</script>

<style lang="scss" scoped>
.app-scroller {
  min-height: 1em;
  width: 100%;
  height: fit-content;
  overflow: hidden;
  position: relative;
  margin-top: -1em;
  margin-bottom: -1em;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    display: block;
    height: 2em;
    width: 100%;
    z-index: 4;
    background: linear-gradient(0deg, rgba($color-background, 0) 0%, rgba($color-background, 0.5));
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    display: block;
    height: 1em;
    width: 100%;
    z-index: 4;
    background: linear-gradient(0deg, $color-background 0%, rgba($color-background, 0));
  }
}
.app-scroller.mobile {
  &::after, &::before {
    content: unset;
  }
}
</style>
