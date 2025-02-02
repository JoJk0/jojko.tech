<template>
  <section id="projects">
    <h2 class="gradiented step-5" id="skills-title">{{ t('PROJECTS') }}</h2>
    <codersrank-portfolio :grid="true" username="jojk0" class="codersrank-portfolio"></codersrank-portfolio>
  </section>
</template>

<script lang="ts" setup>
// const props = defineProps({})

// const emit = defineEmits({})

const { t } = useI18n()

onMounted(async () => {
  await import('https://unpkg.com/@codersrank/portfolio@x.x.x/codersrank-portfolio.min.js')
})
</script>

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
