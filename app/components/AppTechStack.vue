<script lang="ts" setup>
import { AppTextField } from 'jjk-ui'

const { t } = useI18n()

const search = ref('')

const { data: skills } = useFetch('/api/skills')
const { data: wishlist } = useFetch('/api/wishlist')

const result = computed(() => skills.value?.filter(({ name }) => name.toLowerCase().includes(search.value.toLowerCase())))
const wishListResult = computed(() => wishlist.value?.filter(({ name }) => name.toLowerCase().includes(search.value.toLowerCase())))
</script>

<template>
  <div class="skill-search">
    <AppScroller class="scroller">
      <template #start>
        <AppTextField
          v-model="search"
          class="searchbar"
          expanded
          :placeholder="t('INPUT_PLACEHOLDER')"
          icon-before="material-symbols:search-rounded"
        />
      </template>
      <div class="items">
        <div class="tech-stack">
          <AppTechCard
            v-for="{ name, icon, inverted } of result" :key="name" :name="name" :icon="icon"
            :inverted="inverted"
          />
        </div>
        <AppTitle v-if="wishListResult?.length" size="small" class="title">
          {{ t('WISH_LIST') }}
        </AppTitle>
        <div v-if="wishListResult?.length" class="wishlist">
          <AppTechCard
            v-for="{ name, icon, inverted } of wishListResult" :key="name" :name="name" :icon="icon"
            :inverted="inverted" wishlisted
          />
        </div>
        <div v-if="!result?.length && !wishListResult?.length" class="no-results">
          <div class="emoji">
            🤷‍♂️
          </div>
          {{ t('NO_RESULTS') }}
        </div>
      </div>
    </AppScroller>
  </div>
</template>

<style scoped>
:deep(.app-text-field) {
  backdrop-filter: blur(15px);
}
.skill-search {
  min-width: 20em;
  max-width: 35em;
  width: 100%;
  z-index: 1;

  .scroller {
    --app-scroller-padding: 0px;
  }
}

.items {
  .tech-stack,
  .wishlist {
    display: grid;
    gap: 1.5em;
    align-items: stretch;
    align-content: flex-start;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }

  .no-results {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    flex: 1;
    gap: 1em;

    .emoji {
      font-size: 7em;
    }
  }
}
</style>

<i18n locale="en">
  {
      "INPUT_PLACEHOLDER": "Type to search my tech stack...",
      "NO_RESULTS": "It seems that I don't do that, maybe try widening the term?",
      "WISH_LIST": "Wishlist"
  }
  </i18n>

  <i18n locale="pl">
  {
      "INPUT_PLACEHOLDER": "Wpisz umiejętności, aby wyszukać...",
      "NO_RESULTS": "Hmm wygląda na to, że nie robię tego, spróbuj poszerzyć wyrażenie",
      "WISH_LIST": "Lista życzeń"
  }
  </i18n>

  <i18n locale="es">
  {
      "INPUT_PLACEHOLDER": "Escribe habilidades para buscar...",
      "NO_RESULTS": "Parece que no lo hago, tal vez prueba ampliar la búsqueda?",
      "WISH_LIST": "Lista de deseos"
  }
  </i18n>
