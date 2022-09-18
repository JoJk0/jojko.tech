<template>
  <section id="spotify">
    <div class="now-playing">
      <img :src="cover" class="cover">
      <div class="details">
        <div class="title">
          {{ title }}
        </div>
        <div class="author">
          {{ author }}
        </div>
      </div>
    </div>
    <div class="main-genre">
      Now playing
    </div>
    <div class="top-artists">
      Top artists
    </div>
    <div class="top-songs">
      Top songs
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useSpotify } from '~/composables/useSpotify'

// const props = defineProps({})

// const emit = defineEmits({})

const { t } = useI18n()

const { data } = useSpotify()

const title = computed(() => data.value?.item?.name)

const author = computed(() => data.value?.item?.artists.map(artist => artist.name).join(', '))

const cover = computed(() => data.value?.item?.album?.images[0]?.url)
</script>

<style lang="scss" scoped>
    #spotify {
        .now-playing {
            padding: 1em;
            display: flex;
            gap: 1em;
            .cover {
                width: 8em;
                border-radius: 1em;
            }
            .details {
                .title {
                    font-size: 2em;
                }
                .author {

                }
            }
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
