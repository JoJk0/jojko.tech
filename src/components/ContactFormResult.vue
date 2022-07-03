<template>
  <p>You're a star!</p>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  sentText: {
    type: String,
    required: true,
  },
})

// const emit = defineEmits({});

const { t } = useI18n()
</script>

<style lang="scss" scoped></style>

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
