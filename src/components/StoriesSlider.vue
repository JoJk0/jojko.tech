<template>
  <swiper
    v-if="urls.length"
    ref="swiperEl"
    :slides-per-view="1"
    centered-slides
    centered-slides-bounds
    edge-swipe-detection="prevent"
    :speed="0"
    follow-finger
    preload-images
    watch-slides-progress
    :navigation="{ nextEl: '#stories-slider-next', prevEl: '#stories-slider-prev' }"
    :modules="modules"
    class="swiper"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiperReady"
    @touch-start="onTouchStart"
    @touch-end="onTouchEnd"
  >
    <template #container-start>
      <StoriesSliderHead :name="name" :length="urls.length" :progress="progressPercent" class="head" @close-btn:click="emit('slider:close')" />
      <div class="touch-navigation">
        <div id="stories-slider-prev" class="prev" />
        <div id="stories-slider-next" class="next" />
      </div>
    </template>
    <swiper-slide v-for="url of urls" :key="url" class="slide">
      <img :src="url" :alt="name">
    </swiper-slide>
  </swiper>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Autoplay, Navigation, Zoom } from 'swiper'
import type { Swiper as SwiperInstance } from 'swiper'
import type { PropType } from 'vue'
import { useTimer } from '~/composables/useTimer'

import 'swiper/css/navigation'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  urls: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
})

const emit = defineEmits(['slider:close'])

const speed = 5000

const { start, stop, progressPercent, reset, onFinished } = useTimer(speed, { immediate: true })

const modules = [A11y, Autoplay, Zoom, Navigation]

const swiperInstance = ref<SwiperInstance>()

const onSwiperReady = (instance: SwiperInstance) => swiperInstance.value = instance

const onTouchStart = (instance: SwiperInstance, event: TouchEvent) => {

}
const onTouchEnd = (instance: SwiperInstance, event: TouchEvent) => {

}

onFinished(() => {
  if ((swiperInstance.value?.slides.length || 0) - 1 === swiperInstance.value?.activeIndex) {
    stop()
    emit('slider:close')
  }
  swiperInstance.value!.slideNext()
  start()
})

// swiper.value.activeIndex
// swiper.value.autoplay.pause
// swiper.value.autoplay.paused
// swiper.value.autoplay.run
// swiper.value.progress
// swiper.value.slideNext
// swiper.value.slidePrev
// swiper.value.touches
</script>

<style lang="scss" scoped>
.swiper {
    height: 100vh;
    width: 100%;
}
.slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.touch-navigation {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: stretch;
  z-index: 4;
  .next, .prev {
    flex: 1;
  }
}
.head {
  z-index: 5;
}
</style>
