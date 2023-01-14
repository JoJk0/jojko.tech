<template>
  <swiper
    v-if="images.length" ref="swiperEl" :slides-per-view="1" centered-slides centered-slides-bounds
    edge-swipe-detection="prevent" :speed="0" follow-finger preload-images watch-slides-progress
    :navigation="{ nextEl: '#stories-slider-next', prevEl: '#stories-slider-prev' }" :modules="modules" class="swiper"
    :scrollbar="{ draggable: true }" @swiper="onSwiperReady" @slide-change="reset"
  >
    <template #container-start>
      <StoriesSliderHead
        :class="{ hidden: isHolding }" :name="name" :length="images.length" :progress="progressPercent"
        class="head" @close-btn:click="emit('slider:close')"
      />
      <div class="touch-navigation">
        <div
          id="stories-slider-prev" class="prev" @touchstart.prevent="onTouchStart"
          @touchend.prevent="onTouchEnd($event, 'prev')"
        />
        <div
          id="stories-slider-next" class="next" @touchstart.prevent="onTouchStart"
          @touchend.prevent="onTouchEnd($event, 'next')"
        />
      </div>
    </template>
    <swiper-slide v-for="image of images" :key="image.url" class="slide">
      <div class="img-bg-cnt">
        <img v-if="image.thumbnail" :src="image.thumbnail" class="img-bg">
      </div>
      <v-img :src="image.url" :alt="image.alt" class="slide-img" :lazy-src="image.thumbnail" @load="onImageLoaded">
        <template #placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular indeterminate color="grey-lighten-4" />
          </div>
        </template>
      </v-img>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Autoplay, Navigation, Pagination, Zoom } from 'swiper'
import type { Swiper as SwiperInstance } from 'swiper'
import type { PropType } from 'vue'
import { useTimer } from '~/composables/useTimer'

import 'swiper/css/navigation'
import type { AppImage } from '~/types'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  images: {
    type: Array as PropType<AppImage[]>,
    default: () => [],
  },
})

const emit = defineEmits(['slider:close'])

const speed = 5000

const isHolding = ref(false)

const { start, stop, progressPercent, reset, onFinished } = useTimer(speed)
stop()
const { enter, exit } = useFullscreen()

const modules = [A11y, Autoplay, Zoom, Navigation, Pagination]

const swiperInstance = ref<SwiperInstance>()

const onSwiperReady = (instance: SwiperInstance) => {
  swiperInstance.value = instance
}

let timeout: NodeJS.Timeout

const onTouchStart = (event: TouchEvent) => {
  timeout = setTimeout(() => {
    isHolding.value = true
    stop()
  }, 300)
}
const onTouchEnd = (event: TouchEvent, type: 'prev' | 'next') => {
  if (!isHolding.value) {
    if (type === 'prev')
      onFirstSlideClicked() || swiperInstance.value?.slidePrev()

    else
      onLastSlideClicked() || swiperInstance.value?.slideNext()
  }
  if (timeout) {
    clearTimeout(timeout)
    isHolding.value = false
    start()
  }
}

const onImageLoaded = () => {
  start()
}

const onFirstSlideClicked = () => {
  if (swiperInstance.value?.isBeginning) {
    reset()
    return true
  }
}
const onLastSlideClicked = () => {
  if (swiperInstance.value?.isEnd) {
    stop()
    emit('slider:close')
    return true
  }
}

onFinished(() => {
  if (swiperInstance.value?.isEnd) {
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
  height: 100%;
  width: 100%;
}

.slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .slide-img {
    width: 100%;
  }

  .img-bg-cnt {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: absolute;

    .img-bg {
      width: 100%;
      height: 100%;
      filter: blur(20px);
      object-fit: cover;
    }
  }
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

  .next,
  .prev {
    flex: 1;
  }
}

.head {
  z-index: 5;
  opacity: 1;
  transition: 0.2s;

  &.hidden {
    opacity: 0;
  }
}
</style>
