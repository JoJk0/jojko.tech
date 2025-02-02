<template>
  <div class="item" :class="{ 'wishlist-item': wishlisted }" :title="name">
    <app-chip size="small" class="chip" transparent>
      {{ name }}
    </app-chip>
    <AppIcon :icon="icon" class="icon" :inverted="inverted" />
  </div>
</template>

<script lang="ts" setup>
import { AppIcon, AppChip } from 'jjk-ui';

const props = defineProps({
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
})

// const emit = defineEmits({})

</script>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 0.7em;
  border-radius: 1.5em;
  aspect-ratio: 1;
  flex-basis: 8em;
  height: fit-content;
  overflow: hidden;

  &.wishlist-item {
    opacity: 0.5;
  }

  .icon {
    font-size: 4em;
    aspect-ratio: 1;
    margin: 0.2em;
    flex: 1;
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
