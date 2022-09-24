<template>
  <AppCard class="project-card">
    <div class="card-content">
      <div v-if="!withMobile" class="gallery" />
      <div v-else class="gallery-portrait" />
      <div class="details">
        <div v-if="withMobile" class="gallery-landscape" />
        <AppTitle size="medium">
          {{ project.title }}
        </AppTitle>
        <p>
          {{ project.description }}
        </p>
        <div class="top-keywords">
          Top 3 keywords
        </div>
        <div class="co-authors">
          Co-authors
        </div>
        <div class="date">
          Date
        </div>
        <div class="typography">
          Typography
        </div>
        <div class="colours">
          Colours
        </div>
        <div class="urls">
          Links
        </div>
        <div class="keywords">
          <AppChip v-for="keyword of project.keywords" :key="keyword" size="small" variant="tonal">
            {{ keyword }}
          </AppChip>
        </div>
      </div>
    </div>
  </AppCard>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { useI18n } from 'vue-i18n'
import type { JJKProject } from '~/Data'

const props = defineProps({
  project: {
    type: Object as PropType<JJKProject>,
    required: true,
  },
})

// const emit = defineEmits({})

const withMobile = ref(true)

const { t } = useI18n()
</script>

<style lang="scss" scoped>
.project-card {
  width: fit-content;
  height: fit-content;
  padding: 1em;
  border-radius: 3em;
  .card-content {
    width: fit-content;
    height: 40rem;
    display: flex;
    gap: 1em;
    align-items: stretch;

    .gallery {
      flex: 1;
      background-color: skyblue;
      border-radius: 2em;
    }
    .gallery-portrait {
      aspect-ratio: 390/844;
            //flex: 1;
              background-color: skyblue;
              border-radius: 2em;
    }

    .details {
      width: fit-content;
      display: flex;
      flex-direction: column;
      gap: 1em;
      .gallery-landscape {
              //flex: 1;
              aspect-ratio: 16/9;
                background-color: skyblue;
                border-radius: 2em;
      }
    }
    .keywords {
      display: flex;
      gap: 0.5em;
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
