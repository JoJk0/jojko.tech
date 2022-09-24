<template>
  <section id="projects">
    <app-title>{{ t('PROJECTS') }}</app-title>
    <div class="projects-container">
      <ProjectCard v-for="project of projects" :key="project.id" :project="project" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import data from '~/Data'

// const props = defineProps({})

// const emit = defineEmits({})

const { t } = useI18n()

const { projects } = data
</script>

<style lang="scss" scoped></style>

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
