<template>
  <app-sidebar v-if="!mobile" />
  <div class="container">
    <RouterView />
    <app-footer />
  </div>
</template>

<script setup lang="ts">
const { mobile } = useDisplay()
</script>

<style lang="scss" scoped>
  .container {
    flex: 1;
  }
</style>
