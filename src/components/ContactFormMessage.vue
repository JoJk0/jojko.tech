<template>
  <div class="contact-form-message">
    <AppSubtitle>{{ t('WHAT_S_ON_YOUR_MIND') }}</AppSubtitle>
    <div class="message-container">
      <v-textarea
        counter
        :model-value="modelValue" :label="t('MESSAGE_LABEL')" :placeholder="placeholder" variant="outlined"
        :rules="rules" :error="!!errorMessage" :error-messages="errorMessage" @update:model-value="updateValue"
      />
      <a target="_blank" :href="markdownLink" :title="t('MARKDOWN_LINK_TITLE')" class="md-icon">
        <i-bi-markdown />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

defineProps({
  placeholder: {
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
})

const { t } = useI18n()

const updateValue = (value: string) => {
  emit('update:modelValue', value)
}

const rules = computed(() => [(value: string) => value.length <= 768 || t('MESSAGE_MAX_LENGTH')])

const markdownLink = 'https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax'
</script>

<style lang="scss" scoped>
.contact-form-message {
  .message-container {
  position: relative;
  .md-icon {
    margin: 1em;
    position: absolute;
    top: 0;
    right: 0;
    transition: 0.2s;
  }
  &:focus-within {
    .md-icon {
      opacity: 0.3;
    }
  }
  }
}
.grecaptcha-info {
  white-space: pre-wrap;
  font-size: 0.7em;
  opacity: 0.7 !important;
}
</style>

<i18n locale="en">
{
  "WHAT_S_ON_YOUR_MIND": "Great, what's on your mind?",
  "MESSAGE_LABEL": "Markdown message",
  "MESSAGE_MAX_LENGTH": "Max 768 characters",
  "MARKDOWN_LINK_TITLE": "Markdown syntax is supported, click to find out more..."
}
</i18n>

<i18n locale="pl">
{
  "WHAT_S_ON_YOUR_MIND": "Super, o czym teraz myślisz?",
  "MESSAGE_LABEL": "Wiadomość Markdown",
  "MESSAGE_MAX_LENGTH": "Max 768 znaków",
  "MARKDOWN_LINK_TITLE": "Markdown jest wspierany. Kliknij, aby dowiedzieć się więcej..."
}
</i18n>

<i18n locale="es">
{
  "WHAT_S_ON_YOUR_MIND": "¡Genial!, ¿qué estás pensando?",
  "MESSAGE_LABEL": "Mensaje Markdown",
  "MESSAGE_MAX_LENGTH": "Max 768 caracteres",
  "MARKDOWN_LINK_TITLE": "Markdown es soportado. Haga clic para obtener más información..."
}
</i18n>
