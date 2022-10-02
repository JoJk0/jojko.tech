<template>
  <div class="colour" :style="{ backgroundColor: colour.code, color: colour.code }">
    <div class="text">
      {{ colour.name }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { JJKProject } from '~/Data'

defineProps({
  colour: {
    type: Object as PropType<JJKProject['colourPalette'] extends Array<infer U> ? U : never>,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.colour {
  width: 4rem;
  height: 4rem;
  aspect-ratio: 1;
  border-radius: 100%;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-right: -1rem;
  font-size: 0.5em;
  transition: 0.2s;
  scale: 1;
  padding: 0.5em;
  border: 1px solid rgba(var(--md-sys-color-background-rgb), 0.5);

  &:hover {
    z-index: 1;
    scale: 1.5;

    .text {
      opacity: 1;
    }
  }

  .text {
    color: inherit;
    filter: invert(1) hue-rotate(180deg);
    opacity: 0;
    transition: 0.2s;
    cursor: default;
  }
}
</style>
