<template>
  <section-hi @locale-change="toggleLocales($event)" />
  <section-skills />
  <section-projects />
  <!-- <section-spotify />
  <section-posts /> -->
  <section-contact />
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

<route lang="yaml">
meta:
  layout: default
</route>
