<template>
  <div class="title" :class="size">
    <slot />
  </div>
</template>

<script lang="ts" setup>
// import { useI18n } from 'vue-i18n';

import type { PropType } from 'vue'

const props = defineProps({
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'large',
  },
})

// const emit = defineEmits({});

// const { t } = useI18n();
</script>

<style lang="scss" scoped>
.title {
    background: $main-gradient;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 5em;
    font-weight: bold;
    &.medium {
        font-size: 3em;
    }
    &.small {
        font-size: 2em;
    }
}
</style>

<i18n locale="en">
{

}
</i18n>

<i18n locale="pl">
{

}
</i18n>

<i18n locale="es">
{

}
</i18n>
