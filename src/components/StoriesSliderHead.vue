<template>
  <div class="head">
    <div class="indicator">
      <div
        v-for="i in length" :key="i" class="fragment"
        :class="{ active: i - 1 === swiper?.activeIndex, consumed: i - 1 < swiper?.activeIndex }"
      >
        <div v-if="i - 1 === swiper?.activeIndex" class="active-fragment" />
      </div>
    </div>
    <div class="cnt">
      <div class="title">
        {{ name }}
      </div>
      <v-btn variant="text" icon="close" color="white" @click="emit('close-btn:click') " />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSwiper } from 'swiper/vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
  progress: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['close-btn:click'])

const swiper = useSwiper()

const fragmentWidthCss = computed(() => `${props.progress}%`)
</script>

<style lang="scss" scoped>
.head {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0));
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    padding: 1em;

    .indicator {
        display: flex;
        gap: 3px;
        width: 100%;

        .fragment {
            height: 5px;
            flex: 1;
            background-color: rgba(255, 2552, 255, 0.5);
            border-radius: 3px;
            display: flex;
            overflow: hidden;
            &.consumed {
                background-color: white;
            }

            .active-fragment {
                width: v-bind(fragmentWidthCss);
                background-color: white;
                height: 100%;
                transition: width 0.1s linear;
            }
        }
    }

    .cnt {
        display: flex;
        justify-content: space-between;
        padding: 0.5em;
        padding-right: 0;
        align-items: center;

        .title {
            font-weight: 600;
        }
    }
}
</style>
