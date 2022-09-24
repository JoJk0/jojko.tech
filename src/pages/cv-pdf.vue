<template>
  <CVRenderer :data="cv" :black-and-white="blackAndWhite" />
</template>

<script lang="ts" setup>
import data from '~/Data'

const props = defineProps({
  blackAndWhite: Boolean,
})

// const emit = defineEmits({})

const { cv } = data
</script>

<style lang="scss" scoped></style>

<route lang="yaml">
meta:
  name: RAW_CV_PDF
  layout: window
</route>
