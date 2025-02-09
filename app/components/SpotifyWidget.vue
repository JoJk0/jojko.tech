<script lang="ts" setup>
import { AppCard } from 'jjk-ui'
// const props = defineProps({})

// const emit = defineEmits({})
</script>

<template>
  <AppCard class="spotify-widget-wrapper">
    <iframe
      style="border-radius: var(--space-m)"
      title="Spotify"
      src="https://embed-standalone.spotify.com/embed/playlist/37i9dQZEVXcHxpjc5w4Z68?utm_source=generator&theme=0"
      allowfullscreen="false"
      class="spotify-widget"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
    />
  </AppCard>
</template>

<style scoped>
.spotify-widget-wrapper {
  padding: 0;
}
.spotify-widget {
  border-radius: var(--space-m);
  width: 100%;
  height: 30em;
  border: 0;
  overflow: hidden;
  filter: sepia(0.5) saturate(2.7) hue-rotate(185deg) contrast(1.22);
}
</style>
