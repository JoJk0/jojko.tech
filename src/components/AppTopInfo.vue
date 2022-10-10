<template>
  <div class="notification">
    <div class="markdown-container" v-html="markdown({ linkify: true }).render(info || '')" />
  </div>
</template>

<script lang="ts" setup>
import markdown from 'markdown-it'

const props = defineProps({
  info: String,
})

// const emit = defineEmits({})
</script>

<style lang="scss" scoped>
    .notification {
        display: flex;
        gap: 0.5em;
        align-items: center;
        background: rgba($color-text, 0.05);
        border-bottom: 1px solid rgba($color-text, 0.2);
        backdrop-filter: blur(10px);
        width: 100vw;
        height: fit-content;
        z-index: 10;
        justify-content: center;
        padding: 0.7em;
        font-weight: 600;
    }
</style>
