<template>
  <div class="contact-form-name">
    <AppSubtitle s>
      {{ t('NAME_LABEL') }}
    </AppSubtitle>
    <v-text-field
      :model-value="modelValue"
      :label="t('TEXT_LABEL')"
      :placeholder="t('TEXT_PLACEHOLDER')"
      variant="outlined"
      class="input"
      :color="errorMessage ? 'red' : undefined"
      :error="!!errorMessage"
      :error-messages="errorMessage"
      @update:model-value="updateValue"
      @keyup.enter="emit('next', true)"
    />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  errorMessage: {
    type: String,
    default: undefined,
  },
})

const emit = defineEmits({
  'update:modelValue': String,
  'next': Boolean,
})

const { t } = useI18n()

const updateValue = (value: string) => {
  emit('update:modelValue', value)
}
</script>

<style lang="scss" scoped>
.contact-form-name {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2em;
  padding: 1em 2em;
  .input {
    margin: -1em;
  }
}
</style>

<i18n locale="en">
{
    "NAME_LABEL": "First, how should I call you?",
    "TEXT_LABEL": "Your name",
    "TEXT_PLACEHOLDER": "e.x. Elon Musk"
}
</i18n>

<i18n locale="pl">
{
    "NAME_LABEL": "Jak mam się do Ciebie zwracać?",
    "TEXT_LABEL": "Twoje imię",
    "TEXT_PLACEHOLDER": "np. Elon Musk"
}
</i18n>

<i18n locale="es">
{
    "NAME_LABEL": "Primero, ¿cómo debo llamarte?",
    "TEXT_LABEL": "Tu nombre",
    "TEXT_PLACEHOLDER": "p.ej. Elon Musk"
}
</i18n>
