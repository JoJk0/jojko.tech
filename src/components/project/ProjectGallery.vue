<template>
  <div class="photos" :class="{ mobile }">
    <swiper
      v-if="!mobile" nested slides-per-view="auto" :space-between="30" :mousewheel="{
        forceToAxis: true,
      }" :modules="modules" class="mySwiper" navigation :scrollbar="{ draggable: true }"
    >
      <swiper-slide v-for="image of images" :key="image.url" class="slide">
        <GalleryImage :src="image.url" :alt="image.alt" :lazy-src="image.thumbnail" />
      </swiper-slide>
    </swiper>
    <GalleryImages v-else :images="images" :name="name">
      <template #activator="props">
        <v-img
          v-bind="props" :src="images ? images[0].url : undefined"
          :lazy-src="images ? images[0].thumbnail : undefined" class="stories-button" :aspect-ratio="16 / 9" cover
          @click="setHash"
        >
          <div v-if="mobile" class="image-counter">
            <AppIcon icon="image" class="icon" />
            <span>{{ images?.length || 0 }}</span>
          </div>
        </v-img>
      </template>
    </GalleryImages>
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
import type { AppImage } from '~/types'
import { getThumbFilename } from '~/utils'
import { STORY_HASH } from '~/main'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})

// const emit = defineEmits({})

const { t } = useI18n()

const { mobile } = useDisplay()

const router = useRouter()

const files = useStorageFiles(`projects/${props.id}`)

const thumbs = useStorageFiles(`projects/${props.id}/thumbnails`)

const images = computed<AppImage[] | undefined>(() => files.value?.map(file => ({
  url: file.url,
  alt: file.filename,
  thumbnail: thumbs.value?.find(thumb => thumb.filename === getThumbFilename(file.filename))?.url,
})))

const modules = [Navigation, Scrollbar, A11y, Mousewheel]

const setHash = () => router.push({ hash: STORY_HASH })
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

.photos.mobile {
  padding: 3px;
  background: $button-gradient;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .stories-button {
    border-radius: 1.8em;
    overflow: hidden;
    border: 6px solid $color-background;
    position: relative;
    background-color: $color-background;

    .image-counter {
      position: absolute;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.7);
      padding: 0.7em 1em;
      margin: 0.5em;
      display: flex;
      gap: 0.5em;
      font-weight: 600;
      border-radius: 2em;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>

<style lang="scss">
.swiper-button-next,
.swiper-button-prev {
  &:after {
    font-weight: bold;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    width: 2em;
    height: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    aspect-ratio: 1;
    font-size: 1.2rem;
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
