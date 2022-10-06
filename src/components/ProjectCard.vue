<template>
  <AppCard class="project-card" :class="{ mobile, active: slide.isActive }" :link="!slide.isActive" @click="setSlide">
    <div class="card-content">
      <ProjectGallery :id="project.id" :name="project.title" />
      <div class="details">
        <div class="left">
          <AppTitle size="medium" class="title">
            {{ project.title }}
          </AppTitle>
          <p class="description">
            {{ t('PROJECT_DESCRIPTION') }}
          </p>
          <div class="flex">
            <div class="date">
              <span class="section-title">{{ t('ADDED') }}: </span><span class="val">{{ date }}</span>
            </div>
            <div v-if="project.coAuthors.length" class="co-authors">
              <div class="section-title">
                {{ t('CO_AUTHORS') }}:
              </div>
              <div class="cnt">
                <div v-for="author in project.coAuthors" :key="author">
                  {{ author }}
                </div>
              </div>
            </div>
          </div>
          <div class="mid">
            <ProjectTopKeywords :keywords="project.topKeywords" />
            <div class="keywords">
              <AppChip v-for="keyword of project.keywords" :key="keyword" size="small" variant="tonal">
                {{ keyword }}
              </AppChip>
            </div>
          </div>
        </div>
        <div class="right">
          <ProjectLinks :links="project.urls" />
          <div class="typography titled">
            <div class="section-title">
              {{ t('TYPOGRAPHY') }}
            </div>
            <div class="cnt">
              <ProjectFont v-for="font of project.typography" :key="font.name" :font="font" />
            </div>
          </div>
          <div class="colour-palette titled">
            <div class="section-title">
              {{ t('COLOUR_PALETTE') }}
            </div>
            <div class="cnt">
              <ProjectColour v-for="colour of project.colourPalette" :key="colour.code" :colour="colour" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppCard>
</template>

<script lang="ts" setup>
import { DateTime } from 'luxon'
import { useSwiperSlide } from 'swiper/vue'
import type { PropType } from 'vue'
import { useI18n } from 'vue-i18n'
import type { JJKProject } from '~/Data'
import { addMessage } from '~/utils'

const props = defineProps({
  project: {
    type: Object as PropType<JJKProject>,
    required: true,
  },
})

const emit = defineEmits(['slide:next:set', 'slide:prev:set'])

const { t } = useI18n({
  messages: addMessage(props.project.description, 'PROJECT_DESCRIPTION'),
})

const { mobile } = useDisplay()

const slide = useSwiperSlide()

const setSlide = () => {
  if (slide.value.isNext)
    emit('slide:next:set')

  else if (slide.value.isPrev)
    emit('slide:prev:set')
}

const date = computed(() => DateTime.fromISO(props.project.date).toLocaleString(DateTime.DATE_MED))
</script>

<style lang="scss" scoped>
.project-card {
  width: fit-content;
  height: fit-content;
  padding: 1em;
  border-radius: 3em;
  opacity: 0.4;
  scale: 0.9;
  transition: 0.4s;
  &.active {
    opacity: 1;
    scale: 1;
    .card-content {
      pointer-events: unset;
    }
  }

  .card-content {
    width: fit-content;
    display: flex;
    gap: 1em;
    align-items: stretch;
    flex-direction: column;
    pointer-events: none;

    .details {
      width: fit-content;
      display: flex;
      gap: 1em;
      flex-wrap: wrap;
      width: 100%;
      justify-content: space-between;
      align-items: stretch;

      .left {
        display: flex;
        flex-direction: column;
        gap: 1em;
        flex: 1;

        .top {
          display: inherit;
          gap: inherit;
          flex-direction: inherit;
        }

        .mid {
          display: inherit;
          gap: inherit;
          flex-direction: inherit;
        }

        .bot {
          display: inherit;
          gap: inherit;
          flex-direction: inherit;
        }
      }

      .right {
        display: flex;
        flex-direction: column;
        gap: 1em;
      }

      .description {
        max-width: fit-content;
      }

      .flex {
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      .section-title {
        opacity: 0.7;
      }

      .titled {
        display: flex;
        flex-direction: column;
        gap: 1em;

        .cnt {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      }

      .colour-palette {
        .cnt {
          display: flex;
          flex-direction: row;
        }
      }
    }

    .keywords {
      display: flex;
      gap: 0.5em;
      flex-wrap: wrap;
    }
  }
}

.project-card.mobile {
  .details {
    font-size: 0.8em;
    .left {
      gap: 1em;
      .title {
        line-height: 1em;
      }
      .top {

      }
      .mid {

      }
      .bot {

      }
    }

    .right {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
}
</style>

<i18n locale="en">
{
  "CO_AUTHORS": "Co-authors",
  "ADDED": "Added",
  "TYPOGRAPHY": "Typography",
  "COLOUR_PALETTE": "Colour palette"
}
</i18n>

<i18n locale="pl">
{
  "CO_AUTHORS": "Współautorzy",
  "ADDED": "Dodano",
  "TYPOGRAPHY": "Typografia",
  "COLOUR_PALETTE": "Paleta kolorów"
}
</i18n>

<i18n locale="es">
{
  "CO_AUTHORS": "Coautores",
  "ADDED": "Añadido",
  "TYPOGRAPHY": "Tipografía",
  "COLOUR_PALETTE": "Paleta de colores"
}
</i18n>
