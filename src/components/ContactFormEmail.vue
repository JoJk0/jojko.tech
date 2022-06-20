<template>
  <div class="contact-form-email">
    <AppSubtitle>{{ t('NICE_TO_MEET_YOU', { name }) }}</AppSubtitle>
    <v-text-field
      v-model="email"
      :label="t('HOW_SHOULD_I_GET_BACK_TO_YOU')"
      :placeholder="t('EMAIL_PLACEHOLDER')"
      variant="outlined"
    />
    <div v-if="errorMessage" class="error">
      {{ errorMessage }}
    </div>
    <v-card-actions>
      <v-btn rounded color="primary" block @click="next">
        Next >
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useField } from 'vee-validate'
import { email as emailValidator, required } from '@vee-validate/rules'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

const emit = defineEmits({
  email: String,
})

const { t } = useI18n()

const { value: email, errorMessage, validate } = useField<string>('', [required, emailValidator])

const next = async () => {
  const { valid } = await validate()
  if (valid)
    emit('email', email.value)
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
    "EMAIL_PLACEHOLDER": "np. follow.dreams{'@'}sbigthing.io"
}
</i18n>

<i18n locale="es">
{
    "NICE_TO_MEET_YOU": "¡Encantadx de conocerte, {name}!",
    "HOW_SHOULD_I_GET_BACK_TO_YOU": "¿Cómo me puedo contactar contigo?",
    "EMAIL_PLACEHOLDER": "p.ej. follow.dreams{'@'}bigthing.io"
}
</i18n>
