<template>
  <v-dialog :model-value="modelValue" persistent @update:model-value="emit('update:modelValue', $event)">
    <v-card class="content rounded-xl">
      <v-toolbar dark color="background">
        <v-btn icon dark @click="emit('update:modelValue', false)">
          <i-feather-arrow-left />
        </v-btn>
        <v-toolbar-title class="modal-title">
          {{ t('GET_IN_TOUCH') }}
        </v-toolbar-title>
      </v-toolbar>
      <v-window v-model="currentState" class="container">
        <v-window-item value="name">
          <contact-form-name
            v-model="name.value.value" class="window-state"
            :error-message="name.errorMessage.value" @next="onNext(name, 'email')"
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
            :is-hiring="isHiring"
            :placeholder="topic.draftText" :error-message="message.errorMessage.value"
          />
        </v-window-item>
        <v-window-item value="preview">
          <contact-form-preview
            v-model="receipt.value.value" class="window-state" :data="formData"
            :current-topic-name="topic.name"
          />
        </v-window-item>
        <v-window-item value="result">
          <contact-form-result class="window-state" :sent-text="topic.sentText" />
        </v-window-item>
      </v-window>
      <v-card-actions class="actions">
        <template v-if="currentState === 'preview'">
          <app-button
            class="action-button" primary :disabled="isSending" :loading="isSending"
            :error-message="error" @click="sendMail(formData)"
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
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import type { FieldContext } from 'vee-validate'
import { useField } from 'vee-validate'
import type { PropType } from 'vue'
import type Data from '../Data'
import { useEmailSender } from '~/composables/useEmailSender'

export type ContactFormState = 'name' | 'email' | 'message' | 'result' | 'preview'

export interface ContactFormData {
  name: string
  email: string
  message: string
  topic: typeof Data['topics'][number]['id']
  receipt: boolean
}

// eslint-disable-next-line vue/define-macros-order
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  topic: {
    type: Object as PropType<{
      id: typeof Data['topics'][number]['id']
      name: string
      draftText: string
      sentText: string
    }>,
    required: true,
  },
})

const emit = defineEmits({
  'update:modelValue': Boolean,
})

const { t } = useI18n()

const name = useField<string>('name', 'required|alpha_spaces')
const email = useField<string>('email', 'email|required')
const message = useField<string>('message', 'required')
const receipt = useField<boolean>('receipt', null, { initialValue: true })

const currentState = ref<ContactFormState>('name')

const formData = computed<ContactFormData>(() => ({
  name: name.value.value,
  email: email.value.value,
  message: message.value.value,
  topic: props.topic.id,
  receipt: receipt.value.value,
}))

const { isSending, error, sendMail, onSuccess } = useEmailSender()

const isHiring = computed(() => props.topic.id === 'HIRING_ME')

const onNext = async (field: FieldContext<string>, to: ContactFormState) => {
  const { valid } = await field.validate()
  if (valid)
    currentState.value = to
}

const onBack = (to: ContactFormState) => {
  currentState.value = to
}

onSuccess(() => {
  currentState.value = 'result'
})
</script>

<style lang="scss" scoped>
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
</style>

<i18n locale="en">
{
    "BACK": "Back",
    "NEXT": "Next",
    "REVIEW": "Review",
    "SEND": "Send",
    "GET_IN_TOUCH": "Get in touch 👋"
}
</i18n>

<i18n locale="pl">
{
    "BACK": "Wstecz",
    "NEXT": "Dalej",
    "REVIEW": "Przegląd",
    "SEND": "Wyślij",
    "GET_IN_TOUCH": "Odezwij się! 👋"
}
</i18n>

<i18n locale="es">
{
    "BACK": "Atrás",
    "NEXT": "Siguiente",
    "REVIEW": "Revisar",
    "SEND": "Enviar",
    "GET_IN_TOUCH": "Ponerse en contacto 👋"
}
</i18n>
