<template>
  <div class="sidebar">
    <div
      class="logo-cnt"
      @mouseenter="setIsHovering(true)"
      @mouseleave="setIsHovering(false)"
      @click="scrollToTop"
    >
      <Transition name="fade" mode="out-in">
        <img v-if="!isHovering" src="../assets/logo.svg" class="logo">
        <div v-else class="to-top" i-akar-icons-align-to-top />
      </Transition>
    </div>
    <app-socials id="sidebar-socials" class="socials" />
  </div>
</template>

<script lang="ts" setup>
import { useToggle } from '@vueuse/core'
import { useGSAP } from '~/modules/gsap'

// const props = defineProps({});

// const emit = defineEmits({});

const [isHovering, setIsHovering] = useToggle(false)

const gsap = useGSAP()

const scrollToTop = () =>
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })

onMounted(() => {
  const scrollTrigger: ScrollTrigger.Vars = {
    trigger: '.sidebar',
    start: 'top top',
    end: 'top+=20% top',
    pin: '#sidebar-socials',
    pinType: 'fixed',
    scrub: true,
    markers: false,
  }

  gsap.to('#sidebar-socials', {
    scrollTrigger,
    duration: 1,
    opacity: 0,
    backgroundPositionY: '-=10%',
    ease: 'none',
  })
})

</script>

<style lang="scss" scoped>
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1em;
    font-size: 2em;
    .logo-cnt {
        cursor: pointer;
        height: 10em;
        .to-top {
            font-size: 1em;
        }
    }
}
</style>
