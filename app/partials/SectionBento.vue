<script lang="ts" setup>
// const props = defineProps({})

// const emit = defineEmits({})
</script>

<template>
  <section id="bento">
    <TwitterWidget />
    <div class="row">
      <SpotifyWidget />
      <GithubWidget />
    </div>
  </section>
</template>

<style scoped>
#bento {
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  .row {
    display: flex;
    gap: 1em;
    justify-content: center;
    flex: 1;
    > * {
      flex: 1;
    }
  }
}
</style>
