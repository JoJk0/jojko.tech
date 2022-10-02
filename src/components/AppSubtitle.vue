<template>
  <div class="subtitle" :class="{ s, mobile }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
// import { useI18n } from 'vue-i18n';

const props = defineProps({
  s: {
    type: Boolean,
    default: false,
  },
})

// const emit = defineEmits({});

// const { t } = useI18n();

const { mobile } = useDisplay()
</script>

<style lang="scss" scoped>
.subtitle {
    color: $color-text;
    font-size: 2.5rem;
    font-weight: 600;
    max-width: 30rem;
    &.s {
        font-size: 1.5rem;
    }
    &.mobile {
        font-size: 1.3rem;
        line-height: 2rem;
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
