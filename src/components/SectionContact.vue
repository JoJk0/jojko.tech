<template>
  <section id="contact">
    <AppTitle class="title">
      {{ t('SAY_HI') }}
    </AppTitle>
    <AppSubtitle class="subtitle">
      {{ t('LET_S_DO_SOMETHING_AMAZING') }}
    </AppSubtitle>
    <v-select
      v-model="selectedTopic"
      class="select"
      :placeholder="items[0].name"
      variant="outlined"
      :label="t('LET_S_TALK_ABOUT')"
      :items="items"
      item-title="name"
      item-value="id"
      @update:model-value="setOpen(true)"
    />
    <v-dialog v-model="isOpen">
      <v-card class="content rounded-xl">
        <v-toolbar
          dark
          color="background"
        >
          <v-btn
            icon
            dark
          >
            <i-feather-arrow-left />
          </v-btn>
          <v-toolbar-title class="modal-title">
            {{ t('GET_IN_TOUCH') }}
          </v-toolbar-title>
        </v-toolbar>
        <v-container fluid>
          <transition name="slide" mode="out-in">
            <contact-form-result v-if="name && email && message" />
            <contact-form-message v-else-if="name && email && selectedTopic" :placeholder="selectedTopic.draftText" @message="message = $event" />
            <contact-form-email v-else-if="name" :name="name" @email="email = $event" />
            <contact-form-name v-else @name="name = $event" />
          </transition>
        </v-container>
      </v-card>
    </v-dialog>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import data from '../Data'
import type { AppLocale } from '~/modules/i18n'

const { topics } = data

// const props = defineProps({});

// const emit = defineEmits({});

const [isOpen, setOpen] = useToggle(false)

const { t, locale } = useI18n()

const items = computed(() => topics.map(topic => ({
  id: topic.id,
  name: topic.name[(locale.value as AppLocale)],
  draftText: topic.draftText[(locale.value as AppLocale)],
  sentText: topic.sentText[(locale.value as AppLocale)],
})))

const selectedTopic = ref<typeof items.value[0]>()

const name = ref('')
const email = ref('')
const message = ref('')
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
  .title {
    line-height: 100%;
  }
  .subtitle {
    line-height: 140%;
  }
  .select {
    width: clamp(10rem, 25vw, 30rem);
    transform: scale(1.2);
    margin: 4rem;
  }
}
  .content {
    border-top: 1px solid rgba($color-text, 0.075);
    border-left: 1px solid rgba($color-text, 0.075);
  }
.modal-title {
  font-weight: 500;
}
</style>

<i18n locale="en">
{
    "SAY_HI": "Say Hi! 👋🏻",
    "LET_S_DO_SOMETHING_AMAZING": "Let's do something amazing.",
    "LET_S_TALK_ABOUT": "Let's talk about...",
    "GET_IN_TOUCH": "Get in touch 👋"
}
</i18n>

<i18n locale="pl">
{
    "SAY_HI": "Odezwij się! 👋🏻",
    "LET_S_DO_SOMETHING_AMAZING": "Zróbmy coś wspaniałego.",
    "LET_S_TALK_ABOUT": "Pogadajmy o...",
    "GET_IN_TOUCH": "Skontaktuj się 👋"
}
</i18n>

<i18n locale="es">
{
    "SAY_HI": "!Dime Hola! 👋🏻",
    "LET_S_DO_SOMETHING_AMAZING": "Hagamos algo maravilloso.",
    "LET_S_TALK_ABOUT": "Hablamos de...",
    "GET_IN_TOUCH": "Ponerse en contacto 👋"
}
</i18n>
