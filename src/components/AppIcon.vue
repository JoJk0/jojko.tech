<template>
  <img v-if="isUrl" :src="icon" :alt="icon" class="svg-icon" :class="{ inverted }">
  <img v-else-if="isApi" :src="`${api}/${icon}.svg`" :alt="icon" class="svg-icon" :class="{ inverted }">
  <i v-else class="material-symbols-outlined">{{ icon }}
  </i>
</template>

<script lang="ts" setup>
import { url } from '@vee-validate/rules'
import { validateIconName } from '@iconify/utils'
const props = defineProps({
  icon: {
    type: String,
    default: undefined,
  },
  inverted: {
    type: Boolean,
    default: false,
  },
})

// const emit = defineEmits({})

const api = 'https://api.iconify.design'

const isUrl = computed(() => url(props.icon, {}))

const isApi = computed(() => props.icon
  ? validateIconName({
    provider: '',
    prefix: props.icon.split('/')[0],
    name: props.icon.split('/')[1] || '',
  }, false)
  : undefined)
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
