<template>
  <div class="page">
    <section-hi @locale-change="toggleLocales($event)" />
    <section-skills />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const toggleLocales = (l: string) => {
  locale.value = l
}
</script>

<style scoped>
</style>
