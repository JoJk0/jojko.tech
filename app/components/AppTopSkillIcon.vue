<template>
  <figure class="top-skill-icon">
    <AppIcon :icon="icon" class="glow" />
    <AppIcon :icon="icon" class="glow" />
    <AppIcon :icon="icon" class="asset" :id="`top-skill-icon-asset-${icon}`" />
  </figure>
</template>

<script lang="ts" setup>
import { AppIcon } from 'jjk-ui';
const props = defineProps<{
  icon: string
}>()

// const emit = defineEmits({})

const urlCss = computed(() => `url(https://api.iconify.design/${props.icon}.svg)`)
</script>

<style scoped>
 .top-skill-icon {
    font-size: calc(var(--step-5) * 1.5);
    display: grid;
    aspect-ratio: 1;
    z-index: 1;
    > *, &:after {
      grid-area: 1 / 1;
      aspect-ratio: 1;
      object-fit: contain;
    }
    .asset {
      filter: drop-shadow(-1px -1px 0px rgba(255, 255, 255, .3))
      drop-shadow(0px 0px 1.9px rgba(0, 0, 0, 0.052))
      drop-shadow(0px 0px 4.3px rgba(0, 0, 0, 0.075))
      drop-shadow(0px 0px 7.7px rgba(0, 0, 0, 0.092))
      drop-shadow(0px 0px 12.8px rgba(0, 0, 0, 0.108))
      drop-shadow(0px 0px 21.2px rgba(0, 0, 0, 0.125))
      drop-shadow(0px 0px 37px rgba(0, 0, 0, 0.148))
      drop-shadow(0px 0px 80px rgba(0, 0, 0, 0.2))
      brightness(1.3);
    }
    .glow {
      filter: saturate(1.3) brightness(2) blur(0.35em);
    }
    &:after {
      content: '';
      display: block;
      background-image: linear-gradient(-15deg, rgba(0, 0, 0, 0) 53%, rgb(255, 255, 255, 0.3) 100%);
      background-size: 100%;
      background-position: top left;
      background-repeat: no-repeat;
      mix-blend-mode: overlay;
      mask-image: v-bind(urlCss);
      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;
    }
  }
  </style>
