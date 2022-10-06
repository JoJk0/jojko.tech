<template>
  <div class="item" :class="{ 'wishlist-item': wishlisted, mobile }" :title="name">
    <app-chip size="small" class="chip" variant="tonal">
      {{ name }}
    </app-chip>
    <AppIcon :icon="icon" class="icon" :inverted="inverted" />
  </div>
</template>

<script lang="ts" setup>
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

const { mobile } = useDisplay()
</script>

<style lang="scss" scoped>
.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.05);
    padding: 0.5em;
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
    }

    .chip {
        background-color: transparent;
        color: $color-text;
        align-self: flex-start;
        text-overflow: ellipsis;
        overflow: hidden;
        display: inline-block;
    }
}
.item.mobile {
  flex-basis: 7em;
  .icon {
    font-size: 2.5em;
  }
  .chip {
    font-size: 0.7em;
  }
}
</style>
