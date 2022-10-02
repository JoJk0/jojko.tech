<template>
  <div class="title" :class="[size, { mobile }]">
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

const { mobile } = useDisplay()
</script>

<style lang="scss" scoped>
.title {
    background: $main-gradient;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 4.5rem;
    font-weight: bold;
    background-position: center;
    &.medium {
        font-size: 3rem;
    }
    &.small {
        font-size: 2rem;
    }
    &.mobile {
      font-size: 2.5rem;
      line-height: 2.8rem;
      &.medium {
        font-size: 2rem;
      }
      &.small {
        font-size: 1.5rem;
      }
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
