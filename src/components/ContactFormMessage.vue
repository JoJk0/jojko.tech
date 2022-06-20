<template>
  <div class="contact-form-message">
    <AppSubtitle>{{ t('WHAT_S_ON_YOUR_MIND') }}</AppSubtitle>
    <v-textarea
      v-model="message"
      :label="t('MESSAGE_LABEL')"
      :placeholder="placeholder"
      variant="outlined"
    />
    <div v-if="errorMessage" class="error">
      {{ errorMessage }}
    </div>
    <v-checkbox name="receipt" />
    <v-label for="receipt">
      {{ t('EMAIL_RECEIPT') }}
    </v-label>
    <v-card-actions>
      <v-btn rounded color="primary" block @click="next">
        Send >
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useField } from 'vee-validate'
import { required } from '@vee-validate/rules'

const props = defineProps({
  placeholder: {
    type: String,
    required: true,
  },
})

const emit = defineEmits({
  message: String,
})

const { t } = useI18n()

const { value: message, errorMessage, validate } = useField<string>('', [required])

const next = async () => {
  const { valid } = await validate()
  if (valid)
    emit('message', message.value)
}
</script>

<style lang="scss" scoped>
</style>

<i18n locale="en">
{
  "WHAT_S_ON_YOUR_MIND": "Great, what's on your mind?",
  "EMAIL_RECEIPT": "Send a copy of this message to your email",
  "MESSAGE_LABEL": "Markdown message"
}
</i18n>

<i18n locale="pl">
{
  "WHAT_S_ON_YOUR_MIND": "Super, o czym teraz myślisz?",
  "EMAIL_RECEIPT": "Wyślij kopię tej wiadomości do mnie",
  "MESSAGE_LABEL": "Wiadomość Markdown"
}
</i18n>

<i18n locale="es">
{
  "WHAT_S_ON_YOUR_MIND": "¡Genial!, ¿qué estás pensando?",
  "EMAIL_RECEIPT": "Envíame una copia de este mensaje a mi correo electrónico",
  "MESSAGE_LABEL": "Mensaje Markdown"
}
</i18n>
