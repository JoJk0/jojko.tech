<script lang="ts" setup>
import { AppButton, AppDialog, AppTextField } from 'jjk-ui'

// const props = defineProps({})

// const emit = defineEmits({})

const { t } = useI18n()
</script>

<template>
  <section id="contact">
    <h2 id="skills-title" class="gradiented step-5">
      {{ t('GET_IN_TOUCH') }}
    </h2>
    <p>{{ t('LETS_DO_SOMETHING_AMAZING') }}</p>
    <AppTextField type="textarea" class="textarea" />
    <AppDialog>
      <template #trigger>
        <AppButton variant="primary" class="send-button">
          {{ t('SEND') }}
        </AppButton>
      </template>
      <template #default>
        <h2 class="gradiented step-3">
          Just one more thing...
        </h2>
        <AppTextField placeholder="Enter your contact email" />
        <AppTextField placeholder="Enter your name (optional)" />
        <div class="attribution">
          This site is protected by reCAPTCHA and the Google
          <a href="https://policies.google.com/privacy">Privacy Policy</a> and
          <a href="https://policies.google.com/terms">Terms of Service</a> apply.
        </div>
        <AppButton>Submit</AppButton>
      </template>
    </AppDialog>
  </section>
</template>

<style scoped>
#contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  min-width: 40ch;
  max-width: 80ch;

  .app-text-field {
    align-self: stretch;
  }
}

.attribution {
  font-size: var(--step--1);
}
</style>

<i18n locale="en">
  {
    "LETS_DO_SOMETHING_AMAZING": "Let's do something amazing!",
    "GET_IN_TOUCH": "Get in touch 👋",
    "PLACEHOLDER": "What's on your mind?",
    "SEND": "Send"
  }
</i18n>

<i18n locale="pl">
  {
    "LETS_DO_SOMETHING_AMAZING": "Zróbmy coś fajnego razem!",
    "GET_IN_TOUCH": "Odezwij się 👋",
    "PLACEHOLDER": "Co Ci chodzi po głowie?",
    "SEND": "Wyślij"
  }
</i18n>

<i18n locale="es">
  {
    "LETS_DO_SOMETHING_AMAZING": "¡Hagamos algo increíble juntos!",
    "GET_IN_TOUCH": "Ponerse en contacto 👋",
    "PLACEHOLDER": "¿Qué tienes en mente?",
    "SEND": "Enviar"
  }
</i18n>
