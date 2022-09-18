<template>
  <img v-if="isSvg" :src="icon" :alt="icon" class="svg-icon">
  <i v-else class="material-symbols-outlined">{{ icon }}
  </i>
</template>

<script lang="ts" setup>
const props = defineProps({
  icon: {
    type: String,
    default: undefined,
  },
})

// const emit = defineEmits({})

const isSvg = computed(() => props.icon?.endsWith('.svg'))
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
}
</style>
