<template>
  <div class="skill-search" :class="{ mobile }">
    <v-text-field v-model="search" variant="outlined" :placeholder="t('INPUT_PLACEHOLDER')" />
    <app-scroller class="scroller">
      <div class="items">
        <div class="tech-stack">
          <AppSkillCard v-for="{ name, icon, inverted } of result" :key="name" :name="name" :icon="icon" :inverted="inverted" />
        </div>
        <AppTitle v-if="wishListResult.length" size="small" class="title">
          {{ t('WISH_LIST') }}
        </AppTitle>
        <div v-if="wishListResult.length" class="wishlist">
          <AppSkillCard v-for="{ name, icon, inverted } of wishListResult" :key="name" :name="name" :icon="icon" :inverted="inverted" wishlisted />
        </div>
        <div v-if="!result.length && !wishListResult.length" class="no-results">
          <div class="emoji">
            🤷‍♂️
          </div>
          {{ t('NO_RESULTS') }}
        </div>
      </div>
    </app-scroller>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import data from '~/Data'

// const props = defineProps({});

// const emit = defineEmits({});

const { t } = useI18n()

const { mobile } = useDisplay()

const { skills, wishList } = data

const search = ref('')

const result = computed(() => skills.filter(({ name }) => name.toLowerCase().includes(search.value.toLowerCase())))
const wishListResult = computed(() => wishList.filter(({ name }) => name.toLowerCase().includes(search.value.toLowerCase())))
</script>

<style lang="scss" scoped>
.items {
  height: 22em;
  overflow-y: auto;
  padding-top: 1em;
  padding-bottom: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  .tech-stack, .wishlist {
      display: flex;
        gap: 1.5em;
        flex-wrap: wrap;
        align-items: stretch;
        align-content: flex-start;
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

.skill-search.mobile {
  .items {
    .title {
      position: sticky;
      left: 0;
    }
    .tech-stack,
      .wishlist{
        gap: 0.5em;
        flex-wrap: nowrap;
        height: fit-content;
        width: fit-content;
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
