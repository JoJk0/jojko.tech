<template>
  <section id="contact" :class="{ mobile }">
    <AppTitle class="title">
      {{ t('SAY_HI') }}
    </AppTitle>
    <AppSubtitle s class="subtitle">
      {{ t('LET_S_DO_SOMETHING_AMAZING') }}
    </AppSubtitle>
    <div class="select-container">
      <ContactEmojis />
      <v-select
        v-model="topic.value.value" class="select" :placeholder="items[0].name" variant="outlined"
        menu-icon="expand_more" :label="t('LET_S_TALK_ABOUT')" :items="items" item-title="name" item-value="id"
        hide-details @update:model-value="setOpen(true)"
      />
    </div>
    <ContactForm v-if="topic.value.value" v-model="isOpen" :topic="currentItem!" />
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useField } from 'vee-validate'
import data from '../Data'
import type { ContactFormData } from './ContactForm.vue'
import type { AppLocale } from '~/modules/i18n'

const { topics } = data

const { mobile } = useDisplay()

// const props = defineProps({});

// const emit = defineEmits({});

const [isOpen, setOpen] = useToggle(false)

const { t, locale } = useI18n()

const topic = useField<ContactFormData['topic']>('topic', 'required')

const items = computed(() => topics.map(topic => ({
  id: topic.id,
  name: topic.name[(locale.value as AppLocale)],
  draftText: topic.draftText[(locale.value as AppLocale)],
  sentText: topic.sentText[(locale.value as AppLocale)],
})))

const currentItem = computed(() => items.value.find(item => item.id === topic.value.value)!)
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

#contact.mobile {
  min-height: fit-content;
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
    "GET_IN_TOUCH": "Get in touch 👋"

}
</i18n>

<i18n locale="pl">
{
    "SAY_HI": "Odezwij się! 👋🏻",
    "LET_S_DO_SOMETHING_AMAZING": "Zróbmy coś fajnego.",
    "LET_S_TALK_ABOUT": "Pogadajmy o...",
    "GET_IN_TOUCH": "Odezwij się 👋"

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
