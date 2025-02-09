<script lang="ts" setup>
// const props = defineProps({})

// const emit = defineEmits({})

const { t } = useI18n()

const projects = await useFetch('/api/projects')
</script>

<template>
  <section id="projects">
    <h2 id="skills-title" class="gradiented step-5">
      {{ t('PROJECTS') }}
    </h2>
    {{ projects }}
  </section>
</template>

<style>
.codersrank-portfolio {
  --grid-columns: 2;

  --item-border: 1px solid var(--app-color-outline);
  --item-border-radius: var(--space-m);
  --item-spacing: var(--space-m);
  --item-padding: var(--space-m);
  --item-bg-color: var(--app-color-surface);
}
</style>

<i18n locale="en">
  {
    "PROJECTS": "What I've made"
  }
  </i18n>

<i18n locale="pl">
  {
    "PROJECTS": "Co stworzyłem?"
  }
  </i18n>

<i18n locale="es">
  {
    "PROJECTS": "Lo que hago"
  }
  </i18n>
