<template>
  <section id="posts">
    <a
      class="twitter-timeline"
      data-dnt="true"
      data-theme="dark"
      data-tweet-limit="5"
      data-aria-polite="polite"
      data-show-replies="false"
      data-chrome="noborders nofooter"
      href="https://twitter.com/JJanisz?ref_src=twsrc%5Etfw"
    >Tweets by JJanisz</a>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import 'https://platform.twitter.com/widgets.js'

// const props = defineProps({})

// const emit = defineEmits({})

const { t } = useI18n()
</script>

<style lang="scss" scoped>
    #posts {
        width: 50em;
        max-width: 50em;
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
