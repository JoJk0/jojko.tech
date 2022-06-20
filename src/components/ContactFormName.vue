<template>
  <div class="contact-form-name">
    <AppSubtitle s>
      {{ t('NAME_LABEL') }}
    </AppSubtitle>
    <v-text-field
      v-model="name"
      :label="t('TEXT_LABEL')"
      :placeholder="t('TEXT_PLACEHOLDER')"
      variant="outlined"
      class="input"
      :color="errorMessage ? 'red' : undefined"
    />
    <div v-if="errorMessage" class="error">
      {{ errorMessage }}
    </div>
    <v-card-actions class="actions">
      <app-button l primary @click="next">
        {{ t('NEXT') }}
        <i-feather-arrow-right />
      </app-button>
    </v-card-actions>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useField } from 'vee-validate'
import { alpha, required } from '@vee-validate/rules'

const props = defineProps({
  name: {
    type: String,
    default: null,
  },
})

const emit = defineEmits({
  name: String,
})

const { t } = useI18n()

const { value: name, errorMessage, validate } = useField<string>('', required)

const next = async () => {
  const { valid } = await validate()
  if (valid)
    emit('name', name.value)
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
  .actions {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 1em;
    margin: -1.5rem -2.5rem;
  }
}
</style>

<i18n locale="en">
{
    "NAME_LABEL": "First, how should I call you?",
    "TEXT_LABEL": "Your name",
    "TEXT_PLACEHOLDER": "e.x. Elon Musk",
    "NEXT": "Next"
}
</i18n>

<i18n locale="pl">
{
    "NAME_LABEL": "Jak mam się do Ciebie zwracać?",
    "TEXT_LABEL": "Twoje imię",
    "TEXT_PLACEHOLDER": "np. Elon Musk",
    "NEXT": "Dalej"
}
</i18n>

<i18n locale="es">
{
    "NAME_LABEL": "Primero, ¿cómo debo llamarte?",
    "TEXT_LABEL": "Tu nombre",
    "TEXT_PLACEHOLDER": "p.ej. Elon Musk",
    "NEXT": "Siguiente"
}
</i18n>
