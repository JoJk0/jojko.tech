<template>
  <div class="contact-form-email">
    <AppSubtitle>{{ t('NICE_TO_MEET_YOU', { name }) }}</AppSubtitle>
    <v-text-field
      :model-value="modelValue"
      :label="t('HOW_SHOULD_I_GET_BACK_TO_YOU')"
      :placeholder="t('EMAIL_PLACEHOLDER')"
      variant="outlined"
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
  name: {
    type: String,
    required: true,
  },
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

function updateValue(value: string) {
  emit('update:modelValue', value)
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 2em;
  .title {
    line-height: 100%;
  }
  .subtitle {
    line-height: 140%;
  }
  .select {
    width: 100%;
    transform: scale(1.2);
    margin: 4rem;
  }
    .actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1em;
    margin: -0.5rem;
  }
}
</style>

<i18n locale="en">
{
    "NICE_TO_MEET_YOU": "Nice to meet you, {name}.",
    "HOW_SHOULD_I_GET_BACK_TO_YOU": "How should I get back to you?",
    "EMAIL_PLACEHOLDER": "e.x. follow.dreams{'@'}bigthing.io"
}
</i18n>

<i18n locale="pl">
{
    "NICE_TO_MEET_YOU": "Miło cię poznać, {name}.",
    "HOW_SHOULD_I_GET_BACK_TO_YOU": "Jak mam odezwać się do Ciebie?",
    "EMAIL_PLACEHOLDER": "np. follow.dreams{'@'}bigthing.io"
}
</i18n>

<i18n locale="es">
{
    "NICE_TO_MEET_YOU": "¡Encantadx de conocerte, {name}!",
    "HOW_SHOULD_I_GET_BACK_TO_YOU": "¿Cómo me puedo contactar contigo?",
    "EMAIL_PLACEHOLDER": "p.ej. follow.dreams{'@'}bigthing.io"
}
</i18n>
