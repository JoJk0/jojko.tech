<script lang="ts" setup>
import type { CodersrankProject } from '../../server/codersrankApi'
import { AppButton, AppCard, AppChip } from 'jjk-ui'

defineProps<CodersrankProject>()
</script>

<template>
  <AppCard class="project-card">
    <img :src="image" :alt="company" class="logo">
    <h3 class="title">
      {{ project_title }}
    </h3>
    <p class="company">
      {{ company }}
    </p>
    <p v-if="end_date" class="date">
      {{ end_date }}
    </p>
    <p class="description">
      {{ description }}
    </p>
    <div class="tech-stack">
      <AppChip v-for="tech in highlighted_technologies" :key="tech" transparent size="small" class="chip">
        {{ tech }}
      </AppChip>
    </div>
    <AppButton v-if="link_to_source_code" :href="link_to_source_code">
      Code
    </AppButton>
    <AppButton v-if="link_to_project" :href="link_to_project">
      See
    </AppButton>
  </AppCard>
</template>

<style scoped>
.description {
  opacity: 0.6;
  font-size: var(--step--1);
}
.logo {
  width: 1em;
  height: 1em;
  font-size: 3em;
  border-radius: var(--space-xs);
  box-shadow: 0 0 0 1px var(--app-color-outline);
}
.tech-stack {
  display: flex;
  gap: var(--space-xs);
}
</style>
