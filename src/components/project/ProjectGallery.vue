<template>
  <div class="photos">
    <swiper
      slides-per-view="auto"
      :space-between="30"
      :mousewheel="true"
      :modules="modules"
      class="mySwiper"
      navigation
      :scrollbar="{ draggable: true }"
    >
      <swiper-slide v-for="{ filename, url } of files" :key="filename" class="slide">
        <GalleryImage :src="url" :alt="filename" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Mousewheel, Navigation, Scrollbar } from 'swiper'
import { useStorageFiles } from '~/composables/useStorageFile'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

// const emit = defineEmits({})

const { t } = useI18n()

const files = useStorageFiles(`projects/${props.id}`)

const modules = [Navigation, Scrollbar, A11y, Mousewheel]
</script>

<style lang="scss" scoped>
.photos {
    display: flex;
    gap: 1em;
    align-items: stretch;
    max-width: 50em;
        border-radius: 2em;
        overflow: hidden;
        .slide {
            width: fit-content;
        }

    .gallery {
        flex: 1;
        background-color: skyblue;
        border-radius: 2em;
    }

    .gallery-portrait {
        aspect-ratio: 390/844;
        height: 25rem;
        background-color: skyblue;
        border-radius: 2em;
    }

    .gallery-landscape {
        aspect-ratio: 16/9;
        height: 25rem;
        background-color: skyblue;
        border-radius: 2em;
    }
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
