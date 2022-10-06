<template>
  <section id="contact" :class="{ mobile }">
    <AppTitle class="title">
      {{ t('SAY_HI') }}
    </AppTitle>
    <AppSubtitle s class="subtitle">
      {{ t('LET_S_DO_SOMETHING_AMAZING') }}
    </AppSubtitle>
    <div class="select-container">
      <div class="emojis">
        <AppIcon icon="emojione-monotone/yellow-heart" class="bg-icon" inverted />
        <AppIcon icon="emojione-monotone/lady-beetle" class="bg-icon" inverted />
        <AppIcon icon="emojione-monotone/necktie" class="bg-icon" inverted />
        <AppIcon icon="emojione-monotone/handshake" class="bg-icon" inverted />
        <AppIcon icon="emojione-monotone/bookmark-tabs" class="bg-icon" inverted />
      </div>
      <v-select
        v-model="topic.value.value" class="select" :placeholder="items[0].name" variant="outlined"
        menu-icon="expand_more" :label="t('LET_S_TALK_ABOUT')" :items="items" item-title="name" item-value="id"
        hide-details @update:model-value="setOpen(true)"
      />
    </div>
    <v-dialog v-model="isOpen" persistent>
      <v-card class="content rounded-xl">
        <v-toolbar dark color="background">
          <v-btn icon dark @click="setOpen(false)">
            <i-feather-arrow-left />
          </v-btn>
          <v-toolbar-title class="modal-title">
            {{ t('GET_IN_TOUCH') }}
          </v-toolbar-title>
        </v-toolbar>
        <v-window v-model="currentState" class="container">
          <v-window-item value="name">
            <contact-form-name
              v-model="name.value.value" class="window-state" :error-message="name.errorMessage.value"
              @next="onNext(name, 'email')"
            />
          </v-window-item>
          <v-window-item value="email">
            <contact-form-email
              v-model="email.value.value" class="window-state" :name="name.value.value"
              :error-message="email.errorMessage.value" @next="onNext(email, 'message')"
            />
          </v-window-item>
          <v-window-item value="message">
            <contact-form-message
              v-model="message.value.value" class="window-state"
              :placeholder="currentItem.draftText" :error-message="message.errorMessage.value"
            />
          </v-window-item>
          <v-window-item value="preview">
            <contact-form-preview
              v-model="receipt.value.value" class="window-state" :data="formData"
              :current-topic-name="currentItem.name" @send="onSubmit"
            />
          </v-window-item>
          <v-window-item value="result">
            <contact-form-result class="window-state" :sent-text="currentItem.sentText" />
          </v-window-item>
        </v-window>
        <v-card-actions class="actions">
          <template v-if="currentState === 'preview'">
            <app-button
              class="action-button" primary :disabled="loading" :loading="loading" :error-message="error"
              @click="onSubmit"
            >
              {{ t('SEND') }}
              <i-feather-send />
            </app-button>
            <app-button class="action-button" @click="onBack('message')">
              <i-feather-arrow-left />
              {{ t('BACK') }}
            </app-button>
          </template>
          <template v-else-if="currentState === 'message'">
            <app-button
              class="action-button" primary :disabled="!!message.errorMessage.value"
              @click="onNext(message, 'preview')"
            >
              {{ t('REVIEW') }}
              <i-feather-arrow-right />
            </app-button>
            <app-button class="action-button" @click="onBack('email')">
              <i-feather-arrow-left />
              {{ t('BACK') }}
            </app-button>
          </template>
          <template v-else-if="currentState === 'email'">
            <app-button
              class="action-button" primary :disabled="!!email.errorMessage.value"
              @click="onNext(email, 'message')"
            >
              {{ t('NEXT') }}
              <i-feather-arrow-right />
            </app-button>
            <app-button class="action-button" @click="onBack('name')">
              <i-feather-arrow-left />
              {{ t('BACK') }}
            </app-button>
          </template>
          <template v-else>
            <app-button
              class="action-button" l primary :disabled="!!name.errorMessage.value"
              @click="onNext(name, 'email')"
            >
              {{ t('NEXT') }}
              <i-feather-arrow-right />
            </app-button>
          </template>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import type { FieldContext } from 'vee-validate'
import { useField } from 'vee-validate'
import { useFetch } from '@vueuse/core'
import data from '../Data'
import type Data from '../Data'
import type { AppLocale } from '~/modules/i18n'
export type ContactFormState = 'name' | 'email' | 'message' | 'result' | 'preview'

export interface ContactFormData {
  name: string
  email: string
  message: string
  topic: typeof Data['topics'][number]['id']
}

const { topics } = data

const { mobile } = useDisplay()

const currentState = ref<ContactFormState>('name')

// const props = defineProps({});

// const emit = defineEmits({});

const [isOpen, setOpen] = useToggle(false)

const { t, locale } = useI18n()

const topic = useField<ContactFormData['topic']>('topic', 'required')
const name = useField<string>('name', 'required|alpha_spaces')
const email = useField<string>('email', 'email|required')
const message = useField<string>('message', 'required')
const receipt = useField<boolean>('receipt', null, { initialValue: true })

const formData = computed<ContactFormData>(() => ({
  name: name.value.value,
  email: email.value.value,
  message: message.value.value,
  topic: topic.value.value,
  receipt: receipt.value.value,
}))

const items = computed(() => topics.map(topic => ({
  id: topic.id,
  name: topic.name[(locale.value as AppLocale)],
  draftText: topic.draftText[(locale.value as AppLocale)],
  sentText: topic.sentText[(locale.value as AppLocale)],
})))

const currentItem = computed(() => items.value.find(item => item.id === topic.value.value)!)

const { isFetching: loading, data: result, error, post } = useFetch<{ sent: boolean }>('/api/contact', {
  data: formData.value,
  immediate: false,
})

const onNext = async (field: FieldContext<string>, to: ContactFormState) => {
  const { valid } = await field.validate()
  if (valid)
    currentState.value = to
}

const onBack = (to: ContactFormState) => {
  currentState.value = to
}

const onSubmit = () => {
  post()
}
</script>

<style lang="scss" scoped>
#contact {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 2em;
  min-height: 35em;

  .subtitle {
    line-height: 140%;
  }

  .select-container {
    position: relative;
    .emojis {
      position: absolute;
      display: flex;
      gap: 2em;
      place-content: space-evenly;
      place-items: center;
      flex-wrap: wrap;
      opacity: 0.05;
        .bg-icon {
            font-size: 7em;
          }
      :nth-child(1){
        rotate: -20deg;
      }
      :nth-child(2){
        rotate: 0deg;
      }
      :nth-child(3){
        rotate: 20deg;
      }
      :nth-child(4){
        rotate: 10deg;
      }
      :nth-child(5){
        rotate: -10deg;
      }
    }
  }
  .select-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .select {
    width: clamp(10rem, 100vw, 30rem);
    scale: 1.2;
    max-width: calc(100vw - 6rem);
    margin: 3rem 0;
    height: fit-content;
    display: block;
  }
}

.content {
  border-top: 1px solid rgba($color-text, 0.075);
  border-left: 1px solid rgba($color-text, 0.075);

  .window-state {
    gap: 3em;
    display: flex;
    flex-direction: column;
    padding: 3vw;
  }

  .actions {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1em;
    margin: 0.5rem;

    >* {
      margin: 0 !important;
    }
  }
}

.container {
  padding: 1em;
}

.modal-title {
  font-weight: 500;
}

#contact.mobile {
  min-height: fit-content;
  .bg-icon {
    font-size: 4em;
  }
  .select {
    scale: 1;
    margin: 4em 0;
  }
}
</style>

<i18n locale="en">
{
    "SAY_HI": "Say Hi! 👋🏻",
    "LET_S_DO_SOMETHING_AMAZING": "Let's do something amazing.",
    "LET_S_TALK_ABOUT": "Let's talk about...",
    "GET_IN_TOUCH": "Get in touch 👋",
    "BACK": "Back",
    "NEXT": "Next",
    "REVIEW": "Review",
    "SEND": "Send"
}
</i18n>

<i18n locale="pl">
{
    "SAY_HI": "Odezwij się! 👋🏻",
    "LET_S_DO_SOMETHING_AMAZING": "Zróbmy coś fajnego.",
    "LET_S_TALK_ABOUT": "Pogadajmy o...",
    "GET_IN_TOUCH": "Skontaktuj się 👋",
    "BACK": "Wstecz",
    "NEXT": "Dalej",
    "REVIEW": "Przegląd",
    "SEND": "Wyślij"
}
</i18n>

<i18n locale="es">
{
    "SAY_HI": "!Dime Hola! 👋🏻",
    "LET_S_DO_SOMETHING_AMAZING": "Hagamos algo maravilloso.",
    "LET_S_TALK_ABOUT": "Hablamos de...",
    "GET_IN_TOUCH": "Ponerse en contacto 👋",
    "BACK": "Atrás",
    "NEXT": "Siguiente",
    "REVIEW": "Revisar",
    "SEND": "Enviar"
}
</i18n>
