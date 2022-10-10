<template>
  <div class="emojis" :class="{ mobile }">
    <AppIcon v-for="emoji of emojis" :key="emoji" :icon="emoji" class="bg-icon" inverted />
  </div>
</template>

<script lang="ts" setup>
// const props = defineProps({})

// const emit = defineEmits({})

const { mobile } = useDisplay()

const emojis = [
  'emojione-monotone/necktie',
  'emojione-monotone/handshake',
  'emojione-monotone/lady-beetle',
  'emojione-monotone/bookmark-tabs',
  'emojione-monotone/yellow-heart',
] as const
</script>

<style lang="scss" scoped>
.emojis {
    position: absolute;
    display: flex;
    gap: 2em;
    place-content: space-evenly;
    place-items: center;
    flex-wrap: wrap;
    opacity: 0.05;
    &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba($color-background, 0) 30%, rgba($color-background, 1) 100%);
    }

    .bg-icon {
        font-size: 7em;
    }

    :nth-child(1) {
        rotate: -20deg;
    }

    :nth-child(2) {
        rotate: 0deg;
    }

    :nth-child(3) {
        rotate: 20deg;
    }

    :nth-child(4) {
        rotate: 10deg;
    }

    :nth-child(5) {
        rotate: -10deg;
    }
}

.emojis.mobile {
    .bg-icon {
        font-size: 4em;
    }
}
</style>
