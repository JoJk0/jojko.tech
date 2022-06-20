<template>
  <v-btn class="button" rounded :class="{ primary, l }" :size="l ? 'large' : undefined" v-bind="{ prependIcon, appendIcon }">
    <div class="button-content">
      <slot />
    </div>
  </v-btn>
</template>

<script lang="ts" setup>
const props = defineProps({
  primary: {
    type: Boolean,
    default: false,
  },
  l: {
    type: Boolean,
    default: false,
  },
  prependIcon: {
    type: String,
    default: undefined,
  },
  appendIcon: {
    type: String,
    default: undefined,
  },
})

// const emit = defineEmits({});
</script>

<style lang="scss" scoped>
.button {
        font-weight: 600;
        text-transform: none;
        letter-spacing: -0.005ch;
        box-shadow: $mild-shadow;
        border-radius: calc($border-radius-root / 1.3) $border-radius-root calc($border-radius-root / 1.3) $border-radius-root;
        &:hover {
            transform: scale(1.1);
            box-shadow: $hover-shadow;
        }
    .button-content {
        width: 100%;
        height: 100%;
        display: flex;
        gap: 0.5em;
        align-items: center;
        justify-content: center;
        padding: 0.5em 1em;
    }

    &.primary {
        background: $button-gradient;
        color: $color-background;
    }
    &.l {

    }
    .icon-pre {

    }
    .icon-post {

    }
}
</style>
