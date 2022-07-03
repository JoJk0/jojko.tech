<template>
  <div class="contact-form-preview">
    <AppSubtitle class="title">
      {{ t('PREVIEW') }}
    </AppSubtitle>
    <app-card class="topic" :supertitle="t('TOPIC')" :subtitle="currentTopicName" />
    <app-card class="name" :supertitle="t('NAME')" :subtitle="data.name" />
    <app-card class="email" :supertitle="t('EMAIL')" :subtitle="data.email" />
    <app-card class="message">
      <template #supertitle>
        {{ t('MESSAGE') }}
      </template>
      <div class="markdown-container" v-html="markdown().render(data.message)" />
    </app-card>
    <div class="checkbox-container">
      <div class="glyph">
        <i-ic-round-check-box v-if="modelValue" color="#797ef7" />
        <i-ic-round-check-box-outline-blank v-else color="#797ef7" />
      </div>
      <v-checkbox
        hide-details class="receipt-checkbox" :model-value="modelValue" :label="t('EMAIL_RECEIPT')"
        name="receipt" @update:model-value="updateValue"
      />
    </div>
    <v-label class="grecaptcha-info">
      {{ t('GRECAPTCHA_INFO') }}
    </v-label>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import type { PropType } from 'vue'
import markdown from 'markdown-it'
import type { ContactFormData } from './SectionContact.vue'
defineProps({
  data: {
    type: Object as PropType<ContactFormData>,
    required: true,
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
  currentTopicName: {
    type: String,
    required: true,
  },
})

const emit = defineEmits({
  'update:modelValue': String,
})

const { t } = useI18n()

const updateValue = (value: string) => {
  emit('update:modelValue', value)
}
</script>

<style lang="scss" scoped>
.grecaptcha-info {
  white-space: pre-wrap;
  font-size: 0.7em;
  opacity: 0.7 !important;
}

.contact-form-preview {
  display: grid !important;
  grid-template-columns: 2;
  grid-template-rows: 6;
  gap: 1em !important;
  margin: -1em;
  .title {
    grid-area: 1 / 1 / 2 / 3;
  }

  .topic {
    grid-area: 2 / 1 / 3 / 2;
  }

  .name {
    grid-area: 2 / 2 / 3 / 3;
  }

  .email {
    grid-area: 3 / 1 / 4 / 3;
  }

  .message {
    grid-area: 4 / 1 / 5 / 3;
    .markdown-container {
      padding: 0.5rem 0;
      max-height: 15rem;
      overflow-y: auto;
    }
  }

  .receipt {
    grid-area: 5 / 1 / 6 / 3;
  }

  .grecaptcha-info {
    grid-area: 6 / 1 / 7 / 3;
  }
  .checkbox-container {
    position: relative;
    .glyph {
      position: absolute;
      top: 1.1rem;
      left: 0.7rem;
    }
  }
}
</style>

<i18n locale="en">
{
  "EMAIL_RECEIPT": "Send a copy of this message to your email",
  "SEND": "Send",
  "GRECAPTCHA_INFO": "This site is protected by Google reCAPTCHA and the Google Privacy Policy applies.\nPlease read the Google Privacy Policy to learn more about how Google protects your data.",
  "PREVIEW": "Review",
  "BACK": "Back",
  "TOPIC" : "Topic",
  "NAME" : "Name",
  "EMAIL" : "Email",
  "MESSAGE" : "Message",
  "RECEIPT" : "Email receipt",
  "YES": "Yes",
  "NO": "No"
}
</i18n>

<i18n locale="pl">
{
  "WHAT_S_ON_YOUR_MIND": "Super, o czym teraz myślisz?",
  "EMAIL_RECEIPT": "Wyślij kopię tej wiadomości do mnie",
  "MESSAGE_LABEL": "Wiadomość Markdown",
  "SEND": "Wyślij",
  "GRECAPTCHA_INFO": "Ta strona jest chroniona przez Google reCAPTCHA i obowiązują zasady ochrony prywatności Google.\nPrzejrzyj zasady ochrony prywatności Google, aby dowiedzieć się więcej o sposobie, w jaki Google chroni Twoje dane.",
  "PREVIEW": "Podgląd",
  "BACK": "Wstecz",
  "TOPIC" : "Temat",
  "NAME" : "Imię",
  "EMAIL" : "Email",
  "MESSAGE" : "Wiadomość",
  "RECEIPT" : "Wyślij kopię",
  "YES": "Tak",
  "NO": "Nie"
}
</i18n>

<i18n locale="es">
{
  "WHAT_S_ON_YOUR_MIND": "¡Genial!, ¿qué estás pensando?",
  "EMAIL_RECEIPT": "Envíame una copia de este mensaje a mi correo electrónico",
  "MESSAGE_LABEL": "Mensaje Markdown",
  "SEND": "Enviar",
  "GRECAPTCHA_INFO": "Este sitio está protegido por Google reCAPTCHA y la política de privacidad de Google se aplica.\nLea la política de privacidad de Google para obtener más información sobre cómo Google protege tus datos.",
  "PREVIEW": "Revisar",
  "BACK": "Atrás",
  "TOPIC" : "Tema",
  "NAME" : "Nombre",
  "EMAIL" : "Email",
  "MESSAGE" : "Mensaje",
  "RECEIPT" : "Enviar copia",
  "YES": "Sí",
  "NO": "No"
}
</i18n>
