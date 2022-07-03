<template>
  <div class="page">
    <section-hi @locale-change="toggleLocales($event)" />
    <section-skills />
    <h2>Experience</h2>
    <h2>Projects</h2>
    <h2>GitHub projects</h2>
    <ul>
      <h2>Spotify music</h2>
      <li>Main genre</li>
      <li>Top artists</li>
      <li>Top songs</li>
      <li>Now Playing</li>
    </ul>
    <h2>Tweets</h2>
    <h2>Contact form</h2>
    <section-contact />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { setLocale } from '@vee-validate/i18n'

const { locale } = useI18n()

const toggleLocales = (l: string) => {
  locale.value = l
  setLocale(l)
}
</script>

<style scoped>
</style>
