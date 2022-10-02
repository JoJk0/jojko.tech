<template>
  <div class="locale" @click="toggleLocales">
    <i-twemoji-flag-poland v-if="locale === 'pl'" />
    <i-twemoji-flag-spain v-else-if="locale === 'es'" />
    <i-twemoji-flag-united-kingdom v-else />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

// const props = defineProps({});

const emit = defineEmits({
  localeChange: (e: string) => e,
})

const { locale, availableLocales } = useI18n()

const toggleLocales = () => emit('localeChange', availableLocales[(availableLocales.indexOf(locale.value) + 1) % availableLocales.length])
</script>

<style lang="scss" scoped>
.locale {
    font-size: 2.5em;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    opacity: 0.7;
    display: flex;
    align-items: center;
    &:hover {
        transform: scale(1.2);
        transform-origin: center;
        opacity: 1;
    }
}
</style>

<i18n locale="en">
{

}
</i18n>

<i18n locale="pl">
{

}
</i18n>

<i18n locale="es">
{

}
</i18n>
