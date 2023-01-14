<template>
  <v-dialog v-model="isOpen" class="gallery-images">
    <template #activator="{ props }">
      <slot v-bind="props" name="activator" />
    </template>
    <v-card class="content">
      <StoriesSlider :name="name" :images="images" @slider:close="setOpen(false)" />
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { useI18n } from 'vue-i18n'
import 'swiper/css'
import type { AppImage } from '~/types'

const props = defineProps({
  images: {
    type: Array as PropType<AppImage[]>,
    default: () => [],
  },
  name: {
    type: String,
    required: true,
  },
})

// const emit = defineEmits({})

const { t } = useI18n()

const [isOpen, setOpen] = useToggle(false)
</script>

<style lang="scss" scoped>
.content {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    top: 0;
    left: 0;
    background-color: black;
}
</style>

<style lang="scss">
.gallery-images>.v-overlay__content {
    max-width: 100vw;
    max-height: 100vh;
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
}
</style>

<i18n locale="en">
{
  "HI": "Hello World"
}
</i18n>

<i18n locale="pl">
{
  "HI": "Witaj świecie"
}
</i18n>

<i18n locale="es">
{
  "HI": "Hola Mundo"
}
</i18n>
