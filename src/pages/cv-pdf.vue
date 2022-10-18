<template>
  <CVRenderer :data="cv" :black-and-white="blackAndWhite" />
</template>

<script lang="ts" setup>
import data from '~/Data'

// const props = defineProps({
// })

// const emit = defineEmits({})

const { query } = useRoute()

const blackAndWhite = computed(() => query.blackAndWhite === null || query.blackAndWhite === 'true')

const { cv } = data
</script>

<style lang="scss" scoped></style>

<route lang="yaml">
name: RAW_CV_PDF
meta:
  layout: window
props: true
</route>
