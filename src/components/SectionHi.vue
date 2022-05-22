<template>
  <section id="hi">
    <div id="hi-bg" />
    <div class="content">
      <app-locale-switcher class="switcher" @locale-change="emit('localeChange', $event)" />
      <app-title class="title">
        {{ t('HEY') }} {{ t('IM') }} {{ currentName }}
        <span class="cursor">|</span>
      </app-title>
      <app-subtitle class="subtitle">
        {{ t('INTRO_SUBTITLE') }}
      </app-subtitle>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAnimatedName } from '../composables/useAnimatedName'
import data from '../Data'
import { useGSAP } from '~/modules/gsap'

// const props = defineProps({});

const emit = defineEmits({
  localeChange: (e: string) => e,
})

const { myNames } = data

const { t } = useI18n()

const gsap = useGSAP()

const { animate, currentName } = useAnimatedName(myNames)

onMounted(() => {
  const scrollTrigger: ScrollTrigger.Vars = {
    trigger: '#hi',
    start: 'top top',
    end: 'top+=20% top',
    pin: '#hi-bg',
    pinType: 'fixed',
    scrub: true,
    markers: false,
  }

  gsap.to('#hi-bg', {
    scrollTrigger,
    duration: 1,
    opacity: 0,
    backgroundPositionY: '-=10%',
    ease: 'none',
  })

  animate()
})

</script>

<style lang="scss" scoped>
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
#hi {
    padding: 0
        max(calc(calc(100vw - $container-max-width) / 2), $container-margin);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    #hi-bg {
        background: url("./src/assets/hi-bg.jpg") no-repeat;
        background-size: 250%;
        background-position: 70% 100%;
        min-height: 100vh;
        width: 100vw;
        z-index: 0;
        position: absolute;
    }
    .content {
        gap: 1em;
        display: flex;
        flex-direction: column;
        z-index: 2;
        .switcher {
            position: absolute;
            top: 0;
            right: 0;
        }
        .title {
            .cursor {
                background: $main-gradient;
                -webkit-background-clip: text;
                background-clip: text;
                animation: blink 1.5s linear infinite;
                margin: 0 -0.3em;
                font-weight: 300;
            }
        }
        .subtitle {
        }
    }
    .logo {
        flex: 1;
        width: 30em;
        aspect-ratio: 1;
    }
    .blank {
        flex: 1;
    }
}
</style>

<i18n locale="en">
{
    "HEY": "Hey!",
    "IM": "I'm",
    "INTRO_SUBTITLE": "a full-stack developer and UI/UX designer."
}
</i18n>

<i18n locale="pl">
{
    "HEY": "Cześć!",
    "IM": "Jestem",
    "INTRO_SUBTITLE": "full-stack developer i UI/UX designer."
}
</i18n>

<i18n locale="es">
{
    "HEY": "Hola!",
    "IM": "Soy",
    "INTRO_SUBTITLE": "full-stack developer y UI/UX designer."
}
</i18n>
