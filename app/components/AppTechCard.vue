<script lang="ts" setup>
import { AppChip, AppIcon } from "jjk-ui";

defineProps({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  inverted: {
    type: Boolean,
    default: false,
  },
  wishlisted: {
    type: Boolean,
    default: false,
  },
});

// const emit = defineEmits({})
</script>

<template>
  <div class="item" :class="{ 'wishlist-item': wishlisted }" :title="name">
    <AppChip size="small" class="chip" transparent>
      {{ name }}
    </AppChip>
    <AppIcon
      v-if="!icon.startsWith('http')"
      :icon="icon"
      class="icon"
      :class="{ inverted }"
    />
    <img v-else :src="icon" class="icon url" :class="{ inverted }" alt="icon" />
  </div>
</template>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--app-color-outline);
  padding: var(--space-2xs);
  border-radius: var(--space-s);
  aspect-ratio: 1;
  flex-basis: 8em;
  height: fit-content;
  overflow: hidden;

  &.wishlist-item {
    opacity: 0.5;
  }

  .icon {
    font-size: 3em;
    aspect-ratio: 1;
    margin: 0.2em;
    flex: 1;
    &.inverted {
      filter: invert(1) hue-rotate(180deg);
    }
    &.url {
      width: 1em;
      height: 1em;
    }
  }

  .chip {
    align-self: flex-start;
    width: fit-content;
    display: inline-block;
    white-space: nowrap;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 0.2em 0.7em;
  }
}
</style>
