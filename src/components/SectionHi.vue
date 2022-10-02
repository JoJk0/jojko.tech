<template>
  <section id="hi" :class="{ mobile }">
    <div class="top">
      <app-locale-switcher class="switcher" @locale-change="emit('localeChange', $event)" />
      <img v-if="mobile" src="../assets/logo.svg" class="logo" alt="logo">
    </div>
    <div class="content">
      <app-title class="title">
        {{ t('HEY') }}{{ `\n` }}{{ t('IM') }} {{ currentName }}
        <span class="cursor">|</span>
      </app-title>
      <app-subtitle class="subtitle">
        {{ t('INTRO_SUBTITLE') }}
      </app-subtitle>
    </div>
    <!-- <div style="border: 2px solid red; width: 40em; height: 40em; display: flex; flex-direction: column; justify-content: flex-end;"> -->
    <img id="me" ref="meImg" :src="me" alt="me">
    <!-- </div> -->
  </section>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAnimatedName } from '../composables/useAnimatedName'
import data from '../Data'
import me from '~/assets/me.jpg'
import { useGSAP } from '~/modules/gsap'

// const props = defineProps({});

const emit = defineEmits({
  localeChange: (e: string) => e,
})

const meImg = ref<HTMLImageElement>()

const meMarginPercentages = {
  top: -60,
  left: -62,
  right: -28,
} as const

const f = 2.8

const meCoverPercentage = '75vmin'

const meWidthPx = ref<number>()
const meHeightPx = ref<number>()

const meHeight = computed(() => `calc(${meCoverPercentage} * ${f})`)

const meMarginTop = computed(() => `${(meHeightPx.value || 0) * (meMarginPercentages.top / 100)}px`)
const meMarginLeft = computed(() => `${(meWidthPx.value || 0) * (meMarginPercentages.left / 100)}px`)
const meMarginRight = computed(() => `${(meWidthPx.value || 0) * (meMarginPercentages.right / 100)}px`)

watch(() => meImg.value?.clientWidth, val => meWidthPx.value = val)
watch(() => meImg.value?.clientHeight, val => meHeightPx.value = val)

const { myNames } = data

const { t } = useI18n()

const gsap = useGSAP()

const { mobile } = useDisplay()

const { animate, currentName } = useAnimatedName(myNames)

onMounted(() => {
  const scrollTrigger: ScrollTrigger.Vars = {
    trigger: '#hi',
    start: 'top top',
    end: 'top+=20% top',
    scrub: true,
    markers: false,
  }

  gsap.to('#me', {
    scrollTrigger,
    duration: 1,
    opacity: 0,
    yPercent: '+=10',
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
.top {
    display: flex;
    flex-direction: row-reverse;
    gap: 1em;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 1em;
    margin-top: 2em;
    .switcher {
        z-index: 3;
    }
            .logo {
                width: 2em;
                z-index: 3;
            }
}
#hi {
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    flex-wrap: wrap;
    .top {
        position: absolute;
        top: 0;
        right: 1.5rem;
    }
    #me {
        height: v-bind(meHeight);
        //width: 100%;
        margin-top: v-bind(meMarginTop);
        //margin-top: -35em;
        margin-left: v-bind(meMarginLeft);
        //margin-left: -55em;
        margin-right: v-bind(meMarginRight);
        //margin-right: -31em;
        object-fit: cover;
        object-position: bottom;
        transform-origin: bottom right;
        align-self: flex-end;
        max-width: unset;
        aspect-ratio: 15/8;
    }
    &.mobile {
    align-content: space-between;

        .top {
            position: static;
        }
        .content {
            font-size: 1em;
        }
        .title, .subtitle {
            white-space: pre-wrap;
            background-size: 300%;
        }
        #me {
            translate: 19%;
            scale: 1.2;
        }
    }
    .content {
        gap: 1em;
        display: flex;
        flex-direction: column;
        z-index: 2;
        align-self: center;
        padding: 2em;
        .switcher {
            position: absolute;
            top: 0;
            right: 0;
        }
        .title {
            width: 9.5em;
            max-width: calc(100vw - 4rem);
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
    .blank {
        flex: 1;
    }
}
</style>

<i18n locale="en">
{
    "HEY": "Hey!",
    "IM": "I'm",
    "INTRO_SUBTITLE": "a full-stack developer \nand UI/UX designer."
}
</i18n>

<i18n locale="pl">
{
    "HEY": "Hej!",
    "IM": "Jestem",
    "INTRO_SUBTITLE": "full-stack developer \ni UI/UX designer."
}
</i18n>

<i18n locale="es">
{
    "HEY": "Hola!",
    "IM": "Soy",
    "INTRO_SUBTITLE": "full-stack developer \ny UI/UX designer."
}
</i18n>
