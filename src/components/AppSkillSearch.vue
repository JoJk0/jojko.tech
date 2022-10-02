<template>
  <div class="skill-search" :class="{ mobile }">
    <v-text-field v-model="search" variant="outlined" :placeholder="t('INPUT_PLACEHOLDER')" />
    <div class="items">
      <!-- <swiper slides-per-view="auto" :space-between="30" :mousewheel="true" :modules="modules" class="mySwiper"
            :scrollbar="{ draggable: true }">
            <swiper-slide v-for="{ filename, url } of files" :key="filename" class="slide">
              <GalleryImage :src="url" :alt="filename" />
            </swiper-slide>
          </swiper> -->
      <div v-if="!result.length" class="no-results">
        <div class="emoji">
          🤷‍♂️
        </div>
        {{ t('NO_RESULTS') }}
      </div>
      <div v-for="{ name, icon, inverted } of result" :key="name" class="item">
        <app-chip size="small" class="chip" variant="tonal">
          {{ name }}
        </app-chip>
        <AppIcon :api-icon="icon" class="icon" :inverted="inverted" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue'

// const props = defineProps({});

// const emit = defineEmits({});

const { t } = useI18n()

const { mobile } = useDisplay()

const skills = [
  {
    name: 'TypeScript',
    icon: 'logos/typescript-icon',
  },
  {
    name: 'Google Firebase',
    icon: 'logos/firebase',
  },
  {
    name: 'Ionic',
    icon: 'logos/ionic-icon',
  },
  {
    name: 'Vuetify',
    icon: 'logos/vuetifyjs',
  },
  {
    name: 'AWS Amplify',
    icon: 'logos/aws-amplify',
  },
  {
    name: 'GraphQL',
    icon: 'logos/graphql',
  },
  {
    name: 'Prisma',
    icon: 'logos/prisma',
    inverted: true,
  },
  {
    name: 'MySQL',
    icon: 'logos/mysql-icon',
    inverted: true,
  },
  {
    name: 'Docker',
    icon: 'logos/docker-icon',
  },
  {
    name: 'Adobe Xd',
    icon: 'logos/adobe-xd',
  },
  {
    name: 'Adobe Photoshop',
    icon: 'logos/adobe-photoshop',
  },
  {
    name: 'Adobe Illustrator',
    icon: 'logos/adobe-illustrator',
  },
  {
    name: 'Adobe Substance 3D',
    icon: 'file-icons/adobe',
    inverted: true,
  },
  {
    name: 'Apollo',
    icon: 'logos/apollostack',
    inverted: true,
  },
]

const search = ref('')

const result = computed(() => skills.filter(({ name }) => name.toLowerCase().includes(search.value.toLowerCase())).slice(0, 10))
</script>

<style lang="scss" scoped>
.items {
    display: flex;
    gap: 1.5em;
    flex-wrap: wrap;
    align-items: stretch;
    .no-results {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      gap: 1em;
      .emoji {
        font-size: 7em;
      }
    }
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: rgba(0,0,0,0.2);
      border: 1px solid rgba(255,255,255,0.05);
      padding: 0.5em;
      border-radius: 1.5em;
      aspect-ratio: 1;
      flex-basis: 8em;
      .icon {
        font-size: 4em;
      aspect-ratio: 1;
      margin: 0.2em;
    }
    .chip {
        background-color: transparent;
        color: $color-text;
        align-self: flex-start;
      }
    }
  }
  .skill-search.mobile {
    .items {
      gap: 0.5em;
      flex-wrap: nowrap;
    }
  }
</style>

<i18n locale="en">
{
    "INPUT_PLACEHOLDER": "Type to search my tech stack...",
    "NO_RESULTS": "It seems that I don't do that, maybe try widening the term?"
}
</i18n>

<i18n locale="pl">
{
    "INPUT_PLACEHOLDER": "Wpisz umiejętności, aby wyszukać...",
    "NO_RESULTS": "Hmm wygląda na to, że nie robię tego, spróbuj poszerzyć wyrażenie"
}
</i18n>

<i18n locale="es">
{
    "INPUT_PLACEHOLDER": "Escribe habilidades para buscar...",
    "NO_RESULTS": "Parece que no lo hago, tal vez prueba ampliar la búsqueda?"
}
</i18n>
