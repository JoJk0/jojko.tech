<template>
  <div class="app-scroller">
    <slot />
  </div>
</template>

<script lang="ts" setup>
// const props = defineProps({})

// const emit = defineEmits({})
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
    height: 1em;
    width: 100%;
    z-index: 4;
    background: linear-gradient(0deg, rgba($color-background, 0) 0%, $color-background);
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
</style>
