<template>
  <div class="top-keywords">
    <AppTooltip v-for="{ name, label, url, icon } of keywords" :key="name" :text="label" side="top">
      <a :href="url" target="_blank" class="top-keyword">
        <img :src="getLogoUrl(icon)" :alt="label">
      </a>
    </AppTooltip>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { useI18n } from 'vue-i18n'
import type { JJKProject } from '~/Data'

const props = defineProps({
  keywords: {
    type: Array as PropType<JJKProject['topKeywords']>,
    default: () => [],
  },
})

// const emit = defineEmits({})

const { t } = useI18n()

const iconApiUrl = 'https://api.iconify.design'

const getLogoUrl = (icon: string) => `${iconApiUrl}/${icon}.svg`
</script>

<style lang="scss" scoped>
    .top-keywords {
        display: flex;
        align-items: center;
        gap: 1em;
        .top-keyword {
            font-size: 3em;
            img {
                width: 1em;
                height: 1em;
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
