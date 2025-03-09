<script lang="ts" setup>
import { NuxtLink } from "#components";
import { AppButton, AppCard, AppChip } from "jjk-ui";
import type { CodersrankProject } from "../../server/codersrankApi";

defineProps<CodersrankProject>();

const { d } = useI18n();
</script>

<template>
  <AppCard class="project-card">
    <header>
      <img :src="image" :alt="company" class="logo" />
      <div class="desc">
        <h3 class="title">
          {{ project_title }}
        </h3>
        <p class="company">
          {{ company }}
        </p>
      </div>
    </header>
    <p v-if="end_date" class="date">
      {{ d(new Date(end_date), { month: "short", year: "numeric" }) }}
    </p>
    <p class="description">
      {{ description }}
    </p>
    <footer>
      <div class="tech-stack">
        <AppChip
          v-for="tech in highlighted_technologies"
          :key="tech"
          transparent
          size="small"
          class="chip"
        >
          {{ tech }}
        </AppChip>
      </div>
      <div class="links">
        <AppButton
          v-if="link_to_source_code"
          :tag="NuxtLink"
          icon="material-symbols:code-rounded"
          :href="link_to_source_code"
          class="link"
        >
        </AppButton>
        <AppButton
          v-if="link_to_project"
          :tag="NuxtLink"
          icon="material-symbols:open-in-new-rounded"
          :href="link_to_project"
          class="link"
        >
        </AppButton>
      </div>
    </footer>
  </AppCard>
</template>

<style scoped>
.project-card {
  gap: var(--space-xs);
}
.description {
  opacity: 0.6;
  font-size: var(--step--1);
  flex: 1;
}
header {
  display: flex;
  gap: var(--space-xs);
  align-items: center;
}

footer {
  display: flex;
  gap: var(--space-m);
  align-items: end;
}

.link {
  --jjk-button-padding: var(--space-2xs) var(--space-xs);
}

.company {
  opacity: 0.8;
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
  flex: 1;
}
.links {
  display: flex;
  gap: var(--space-xs);
}
</style>
