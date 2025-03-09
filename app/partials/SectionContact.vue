<script lang="ts" setup>
import { AppButton, AppDialog, AppTextField, AppCard } from "jjk-ui";

const { t } = useI18n();

const isOpen = ref(false);

const content = ref("");

const isSubmitted = ref(false);
</script>

<template>
  <section id="contact">
    <header>
      <h2 class="gradiented step-5">
        {{ t("GET_IN_TOUCH") }}
      </h2>
      <p>{{ t("LETS_DO_SOMETHING_AMAZING") }}</p>
    </header>
    <AppCard v-if="isSubmitted" class="submit-success">
      <h2 class="gradiented step-2">You're a star!</h2>
      Thanks!
    </AppCard>
    <AppTextField
      v-else
      v-model="content"
      type="textarea"
      class="textarea-input"
      :placeholder="t('PLACEHOLDER')"
    >
      <template #actions>
        <AppButton
          v-if="content"
          class="action-button"
          variant="text"
          @click="content = ''"
        >
          {{ t("CLEAR") }}
        </AppButton>
        <AppButton variant="primary" class="send-button" @click="isOpen = true">
          {{ t("SEND") }}
        </AppButton>
      </template>
    </AppTextField>
    <AppDialog
      v-model:open="isOpen"
      :title="t('MODAL_TITLE')"
      :description="t('MODAL_DESCRIPTION')"
      persistent
      class="contact-dialog"
    >
      <div class="fields">
        <AppTextField class="input" :placeholder="t('EMAIL_PLACEHOLDER')" />
        <AppTextField class="input" :placeholder="t('NAME_PLACEHOLDER')" />
      </div>
      <div class="attribution">
        This site is protected by reCAPTCHA and the Google
        <a href="https://policies.google.com/privacy">Privacy Policy</a> and
        <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </div>
      <template #actions>
        <AppButton @click="isOpen = false; isSubmitted = true" variant="primary">{{ t("SUBMIT") }}</AppButton>
        <AppButton @click="isOpen = false">{{ t("CANCEL") }}</AppButton>
      </template>
    </AppDialog>
  </section>
</template>

<style scoped>
#contact {
  display: flex;
  align-items: center;
  gap: 1em;
  min-width: 40ch;
  max-width: var(--page-max-width);
  width: 100%;
  align-self: center;
  padding-inline: var(--space-m);
}

header {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  flex: 1;
}

.submit-success {
  flex: 1;
}

.textarea-input {
  flex: 1;
  resize: none;
}

.contact-dialog {
  align-items: stretch;
  width: 100px;

  .fields {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);

    .input {
      width: auto;
      margin-inline: calc(var(--app-dialog-padding) * -1 / 3);
    }
  }

  .attribution {
    font-size: var(--step--1);
    max-width: 28em;
    text-wrap: balance;
  }
}
</style>

<i18n locale="en">
  {
    "LETS_DO_SOMETHING_AMAZING": "Let's do something amazing!",
    "GET_IN_TOUCH": "Get in touch 👋",
    "PLACEHOLDER": "What's on your mind?",
    "SEND": "Send",
    "CLEAR": "Clear",
    "MODAL_TITLE": "Just one more thing...",
    "MODAL_DESCRIPTION": "Leave some info so I can respond to you ✍️",
    "EMAIL_PLACEHOLDER": "Enter your contact email",
    "NAME_PLACEHOLDER": "Enter your name (optional)",
    "SUBMIT": "Submit",
    "CANCEL": "Cancel"
  }
</i18n>

<i18n locale="pl">
  {
    "LETS_DO_SOMETHING_AMAZING": "Zróbmy coś fajnego razem!",
    "GET_IN_TOUCH": "Odezwij się 👋",
    "PLACEHOLDER": "Co Ci chodzi po głowie?",
    "SEND": "Wyślij",
    "CLEAR": "Wyczyść",
    "MODAL_TITLE": "Jeszcze jedno...",
    "MODAL_DESCRIPTION": "Podaj swoje dane, abym mógł Ci odpowiedzieć ✍️",
    "EMAIL_PLACEHOLDER": "Podaj swój adres e-mail",
    "NAME_PLACEHOLDER": "Podaj swoje imię (opcjonalnie)",
    "SUBMIT": "Wyślij",
    "CANCEL": "Anuluj"
  }
</i18n>

<i18n locale="es">
  {
    "LETS_DO_SOMETHING_AMAZING": "¡Hagamos algo increíble juntos!",
    "GET_IN_TOUCH": "Ponerse en contacto 👋",
    "PLACEHOLDER": "¿Qué tienes en mente?",
    "SEND": "Enviar",
    "CLEAR": "Borrar",
    "MODAL_TITLE": "Solo una cosa más...",
    "MODAL_DESCRIPTION": "Deja algo de información para que pueda responderte ✍️",
    "EMAIL_PLACEHOLDER": "Introduce tu correo de contacto",
    "NAME_PLACEHOLDER": "Introduce tu nombre (opcional)",
    "SUBMIT": "Enviar",
    "CANCEL": "Cancelar"
  }
</i18n>
