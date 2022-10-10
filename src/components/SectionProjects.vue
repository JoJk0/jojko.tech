<template>
  <section id="projects" :class="{ mobile }">
    <app-title>{{ t('PROJECTS') }}</app-title>
    <div class="projects-container">
      <swiper
        ref="swiperEl" slides-per-view="auto" :space-between="30" follow-finger :free-mode="true" preload-images
        :mousewheel="{
          forceToAxis: true,
          releaseOnEdges: true,
        }" :navigation="{ nextEl: '#project-next', prevEl: '#project-prev' }"
        :pagination="{ dynamicBullets: true, dynamicMainBullets: 5, clickable: true }"
        :modules="[Navigation, Mousewheel, Scrollbar, Pagination]" class="swiper" :scrollbar="{ draggable: true }"
        @swiper="instance => swiperInstance = instance"
      >
        <swiper-slide v-for="project of projects" :key="project.id" class="slide">
          <ProjectCard
            :project="project" class="card" @slide:next:set="swiperInstance?.slideNext()"
            @slide:prev:set="swiperInstance?.slidePrev()"
          />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperInstance } from 'swiper'
import { Mousewheel, Navigation, Pagination, Scrollbar } from 'swiper'
import data from '~/Data'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// const props = defineProps({})

// const emit = defineEmits({})

const { t } = useI18n()

const { mobile } = useDisplay()

const swiperInstance = ref<SwiperInstance>()

const { projects } = data
</script>

<style lang="scss">
.swiper-pagination {
  display: none;
  top: 0;
  .swiper-pagination-bullet {
    background: rgba($color-text, 0.6);
  }
  .swiper-pagination-bullet-active {
    background: $color-text;
  }
}

#projects.mobile {
  .swiper-pagination {
    display: block;
  }
}
</style>

<style lang="scss" scoped>
#projects {
  display: flex;
  flex-direction: column;
  gap: 1em;

  .swiper {
    width: 100vw;
    max-width: 100vw;
    margin-left: min((100vw - $page-max-width) / -2, $container-margin * -7);
    padding-left: 7rem;
  }
}

.slide {
  width: fit-content;

  .card {
    //      margin-left: 7rem;
  }

  &:last-of-type {
    width: 100%;
  }
}

#projects.mobile {
    .swiper {
        padding-top: 1.5em;
      }
  .swiper {
    padding-left: 0;
    margin-left: -$container-margin;
    padding-left: $container-margin;
  }

  .slide {}
}
</style>

<i18n locale="en">
{
  "PROJECTS": "What I've made"
}
</i18n>

<i18n locale="pl">
{
  "PROJECTS": "Co stworzyłem?"
}
</i18n>

<i18n locale="es">
{
  "PROJECTS": "Lo que hago"
}
</i18n>
