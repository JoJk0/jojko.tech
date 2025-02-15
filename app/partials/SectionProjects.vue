<script lang="ts" setup>
// const props = defineProps({})

// const emit = defineEmits({})

const { t } = useI18n()

const { data } = await useFetch('/api/projects')
</script>

<template>
  <section id="projects">
    <header>
      <h2 class="gradiented step-5">
        {{ t('PROJECTS') }}
      </h2>
      <div class="text">
        Lorem ipsum dolor sit amet
      </div>
    </header>
    <div class="content">
      <AppProjectCard v-for="(project, i) of data?.projects" :key="i" v-bind="project" />
    </div>
  </section>
</template>

<style scoped>
#projects {
  max-width: var(--page-max-width);
  align-self: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-l);

  header {
    display: flex;
    flex-direction: column;
    gap: var(--space-2xs);
    padding-inline: var(--space-m);
  }
  .content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
    gap: var(--space-m);
  }
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
