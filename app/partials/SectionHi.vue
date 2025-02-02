<template>
  <section id="hi" :aria-label="`${t('HEY')}, ${t('IM')} Jacob`">
    <div class="content">
      <header aria-labelledby="headline-title" aria-describedby="headline-description" class="headline">
        <h1 aria-hidden="true" id="headline-title" class="gradiented step-5">{{ t('HEY') }}, {{ t('IM') }} <span class="current-name">{{
          currentName
        }}</span><span class="cursor">|</span></h1>
        <p class="desc" id="headline-description">
          {{ t('INTRO_SUBTITLE') }}
        </p>
        <AppSocials />
      </header>
      <div class="me">
        <img src="/me.webp" alt="Jacob Janisz smiling, wearing light blue shirt">
      </div>
    </div>
    <div class="top-bar">
      <AppLogo size="small" />
      <AppButton class="lang-switcher" @click="locale = availableLocales[(availableLocales.indexOf(locale) + 1) % availableLocales.length]">
        {{ locale }}
      </AppButton>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { AppButton, AppLogo } from 'jjk-ui'

const { data: myNames } = useFetch('/api/names')

const currentName = useAnimatedName(myNames)

const { t } = useI18n()

const { locale, availableLocales } = useI18n({
  useScope: 'global',
})
</script>

<style scoped>
#hi {
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
  height: 100dvh;
  width: 100%;
  max-width: 100%;

  .content {
    display: flex;
    flex-wrap: wrap;
    height: inherit;
    align-items: center;
    justify-content: center;
  }

  >* {
    grid-area: 1 / 1;
  }
}

.me {
  justify-self: center;
  align-self: flex-end;
  display: grid;
  grid-template-columns: 1fr;
  width: calc(var(--step-2) * 23);
  max-height: 70%;
  aspect-ratio: calc(190 / 281);

  img {
    grid-area: 1 / 1;
    z-index: 1;
    width: inherit;
    height: inherit;
    max-width: inherit;
    max-height: 100%;
    aspect-ratio: inherit;
  }

  &:before,
  &:after {
    content: '';
    display: block;
    aspect-ratio: 1;
    grid-area: 1 / 1;
    mix-blend-mode: overlay;
  }

  &:before {
    background: radial-gradient(ellipse at center, white 0%, rgba(0, 0, 0, 0) 50%, transparent 100%);
    translate: -25% -25%;
    scale: 2;
  }

  &:after {
    background: radial-gradient(ellipse at center, black 0%, rgba(0, 0, 0, 0) 50%, transparent 100%);
    scale: 2;
    translate: 25% 50%;
  }
}

.headline {
  display: flex;
  flex-direction: column;
  gap: 1em;
  z-index: 2;

  #headline-title {
    white-space: nowrap;
    min-width: 15ch;
    .current-name {
      text-underline-offset: .25em;
      text-decoration: underline;
      text-decoration-color: rgba(var(--app-color-secondary-rgb), .3);
      text-decoration-style: dotted;
    }
  }

  .desc {
    font-size: var(--step-2);
  }
}

.top-bar {
  display: flex;
  justify-content: space-between;
  grid-area: 1 / 1;
  z-index: 2;
  height: fit-content;

  .lang-switcher {
    letter-spacing: .05ch;
    --jjk-button-padding: var(--space-xs) var(--space-s);
  }
}

@keyframes blink {
  0% {
    opacity: 0;
  }

  20% {
    opacity: 0;
  }

  30% {
    opacity: 1;
  }

  70% {
    opacity: 1;
  }

  80% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

.cursor {
  background: var(--app-gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  animation: blink 1.5s linear infinite;
  font-weight: 300;
}
</style>

<i18n locale="en">
  {
      "HEY": "Hey",
      "IM": "I'm",
      "INTRO_SUBTITLE": "a full-stack developer and UI/UX designer."
  }
  </i18n>

<i18n locale="pl">
  {
      "HEY": "Hej",
      "IM": "Jestem",
      "INTRO_SUBTITLE": "full-stack developer i UI/UX designer."
  }
  </i18n>

<i18n locale="es">
  {
      "HEY": "Hola",
      "IM": "Soy",
      "INTRO_SUBTITLE": "un desarrollador full-stack y diseñador UI/UX."
  }
  </i18n>
