<template>
  <v-chip :size="size" class="chip">
    <slot />
  </v-chip>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'

type component = typeof import('vuetify/components')['VChip']
type VProps = InstanceType<component>['$props']

const props = defineProps({
  size: {
    type: String as PropType<VProps['size']>,
    default: 'large',
  },
})

</script>

<style lang="scss" scoped>
.chip {
    background: var(--jjk-text-color);
    color: var(--jjk-background-color);
    font-weight: bold;
}
</style>
