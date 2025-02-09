<script lang="ts" setup>
import { AppCard } from 'jjk-ui'

const props = defineProps<{
  title: string
  icon: string
  description: string
}>()

// const emit = defineEmits({})
</script>

<template>
  <AppCard class="app-skill-card">
    <component :is="icon" :title class="svg-icon" />
    <h3 class="title">
      {{ title }}
    </h3>
    <p class="description">
      {{ description }}
    </p>
  </AppCard>
</template>

<style scoped>
.app-skill-card {
  text-wrap: balance;
  max-width: calc(var(--step-0) * 12);
}
.description {
  opacity: 0.6;
  font-size: var(--step--1);
}
.svg-icon {
  color: var(--app-color-secondary);
}
</style>
