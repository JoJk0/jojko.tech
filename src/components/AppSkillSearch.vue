<template>
  <v-text-field :placeholder="t('INPUT_PLACEHOLDER')" />
  <v-btn>
    or upload .csv file to match skills
  </v-btn>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

// const props = defineProps({});

// const emit = defineEmits({});

const { t } = useI18n()
</script>

<style lang="scss" scoped></style>

<i18n locale="en">
{
    "INPUT_PLACEHOLDER": "Type skills to search..."
}
</i18n>

<i18n locale="pl">
{
    "INPUT_PLACEHOLDER": "Wpisz umiejętności, aby wyszukać..."
}
</i18n>

<i18n locale="es">
{
    "INPUT_PLACEHOLDER": "Escribe habilidades para buscar..."
}
</i18n>
