<template>
  <img v-if="isSvg || apiIcon" :src="renderedIcon" :alt="renderedIcon" class="svg-icon" :class="{ inverted }">
  <i v-else class="material-symbols-outlined">{{ icon }}
  </i>
</template>

<script lang="ts" setup>
const props = defineProps({
  icon: {
    type: String,
    default: undefined,
  },
  apiIcon: {
    type: String,
    default: undefined,
  },
  inverted: {
    type: Boolean,
    default: false,
  },
})

// const emit = defineEmits({})

const isSvg = computed(() => props.icon?.endsWith('.svg'))

const api = 'https://api.iconify.design'

const renderedIcon = computed(() => props.apiIcon ? `${api}/${props.apiIcon}.svg` : props.icon)
</script>

<style lang="scss" scoped>
.material-symbols-outlined {
  font-size: 1.5em;
}

.svg-icon {
  font-size: 1.5em;
  width: 1em;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  &.inverted {
    filter: invert(1) hue-rotate(180deg);
  }
}
</style>
