<template>
  <div id="section-cv" :class="{ mobile }">
    <div class="cv-renderer">
      <CVRenderer ref="rendererEl" class="h" :data="cv" :black-and-white="isBlackAndWhite" />
    </div>
    <div class="right-panel" :class="{ mobile }">
      <AppTitle v-if="!mobile" class="title">
        {{ t('CV') }}
      </AppTitle>
      <p>{{ t('CV_TEXT') }}</p>
      <v-item-group v-model="isBlackAndWhite" selected-class="active" class="color-selection">
        <v-item v-slot="{ isSelected, selectedClass, toggle }" :value="false">
          <AppCVIcon :active="isSelected" :class="[selectedClass]" :selected="isSelected" @click="toggle">
            {{ t('COLOUR') }}
          </AppCVIcon>
        </v-item>
        <v-item v-slot="{ isSelected, selectedClass, toggle }" :value="true">
          <AppCVIcon
            black-and-white :active="isSelected" :class="[selectedClass]" :selected="isSelected"
            @click="toggle"
          >
            {{ t('BLACK_AND_WHITE') }}
          </AppCVIcon>
        </v-item>
      </v-item-group>
      <div class="actions">
        <AppButton primary :loading="isGenerating" :href="isBlackAndWhite ? bwUrl : colorUrl" target="_blank">
          {{ t('DOWNLOAD') }}
        </AppButton>
        <!-- <AppButton :loading="isGenerating && clicked === 'print'" @click="(clicked = 'print') && printPdf()">
          {{ t('PRINT') }}
        </AppButton> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { cvBwStoragePath, cvStoragePath } from '../../functions/src/config'
import { useStorageFile } from '~/composables/useStorageFile'
import data from '~/Data'

// const props = defineProps({})

// const emit = defineEmits({})

const { t } = useI18n()

// const [rendererEl, { downloadPdf, printPdf, isGenerating }] = useJsPdf({
//   orientation: 'p',
//   unit: 'pt',
//   format: 'a4',
// })

const { cv } = data

// body.value = document.body

const colorUrl = useStorageFile(cvStoragePath)

const bwUrl = useStorageFile(cvBwStoragePath)

const isGenerating = computed(() => !colorUrl.value || !bwUrl.value)

const { mobile } = useDisplay()

const isBlackAndWhite = ref(false)
// const clicked = ref<'download' | 'print'>()

const scale = computed(() => mobile.value ? 0.4 : 0.8)
</script>

<style lang="scss" scoped>
#section-cv {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;

  &.mobile {
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
  }

  .cv-renderer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0;
    flex: 1;
    max-width: 100%;

    .h {
      scale: v-bind(scale);
      transform-origin: center;
      border-radius: 3rem;
    }
  }

  .right-panel {
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: stretch;
    padding: 3em;

    &.mobile {
      gap: 1em;
      height: fit-content;
      background: var(--md-sys-color-background);
      border-top-left-radius: 2em;
      border-top-right-radius: 2em;
      padding: 1.5em;
      width: 100vw;

      .actions {
        flex-direction: row-reverse;
      }

      .title {
        font-size: 2em;
      }
    }

    .color-selection {
      display: flex;
      gap: 1em;
      justify-content: space-evenly;
      padding: 0.5em 0;
    }

    .actions {
      display: flex;
      gap: 1em;
    }
  }
}
</style>

<i18n locale="en">
{
  "CV": "CV",
  "CV_TEXT": "Grab a fresh copy of my CV:",
  "COLOUR": "Colour",
  "BLACK_AND_WHITE": "Black and white",
  "DOWNLOAD": "Download",
  "PRINT": "Print"
}
</i18n>

<i18n locale="pl">
{
  "CV": "CV",
  "CV_TEXT": "Zabierz ze sobą świeżą kopię mojego CV:",
  "COLOUR": "W kolorze",
  "BLACK_AND_WHITE": "Czarno-białe",
  "DOWNLOAD": "Pobierz",
  "PRINT": "Drukuj"
}
</i18n>

<i18n locale="es">
{
  "CV": "CV",
  "CV_TEXT": "Tomar copia nueva de mi CV:",
  "COLOUR": "En color",
  "BLACK_AND_WHITE": "En blanco y negro",
  "DOWNLOAD": "Descargar",
  "PRINT": "Imprimir"
}
</i18n>

<route lang="yaml">
name: VIEW_CV
meta:
  layout: window
</route>
