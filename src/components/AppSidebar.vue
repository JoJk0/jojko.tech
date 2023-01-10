<template>
  <div class="sidebar">
    <div
      class="logo-cnt"
      @mouseenter="setIsHovering(true)"
      @mouseleave="setIsHovering(false)"
      @click="scrollToTop"
    >
      <Transition name="fade" mode="out-in">
        <img v-if="!isHovering" src="../assets/logo.svg" class="logo" alt="logo">
        <i-akar-icons-align-to-top v-else class="to-top" />
      </Transition>
    </div>
    <app-socials v-if="!mobile" id="sidebar-socials" class="socials" />
  </div>
</template>

<script lang="ts" setup>
import { useToggle } from '@vueuse/core'
import { useGSAP } from '~/modules/gsap'

// const props = defineProps({});

// const emit = defineEmits({});

const { mobile } = useDisplay()

const [isHovering, setIsHovering] = useToggle(false)

const gsap = useGSAP()

const scrollToTop = () =>
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })

onMounted(() => {
  const scrollTrigger: ScrollTrigger.Vars = {
    trigger: '#app',
    start: 'top top',
    end: 'top+=200px top',
    pin: '#sidebar-socials',
    // pinType: 'fixed',
    scrub: true,
    markers: false,
  }

  gsap.to('#sidebar-socials', {
    scrollTrigger,
    duration: 1,
    autoAlpha: 0,
    backgroundPositionY: '-=10%',
    ease: 'none',
  })
})
</script>

<style lang="scss" scoped>
.sidebar {
  position: absolute;
  top: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1em;
    font-size: 2em;
    z-index: 1101;
    .socials {
      font-size: 0.8em;
    }
    .logo-cnt {
        cursor: pointer;
        height: 10em;
        width: 1em;
        .to-top {
            font-size: 1em;
        }
    }
}
</style>
