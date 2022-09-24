<template>
  <section id="skills">
    <app-title>{{ t('WHAT_I_DO') }}</app-title>
    <div class="icons">
      <div class="top-skill">
        <!-- <app-icon3d :icon="VueIcon" width="20em" height="20em" class="icon3d" /> -->
        <app-chip size="x-large">
          Vue.js
        </app-chip>
      </div>
      <div class="top-skill">
        <!-- <app-icon3d :icon="GraphQLIcon" width="20em" height="20em" class="icon3d" /> -->
        <app-chip size="x-large">
          GraphQL
        </app-chip>
      </div>
      <div class="top-skill">
        <!-- <app-icon3d :icon="NodeJSIcon" width="20em" height="20em" class="icon3d" /> -->
        <app-chip size="x-large">
          Node.js
        </app-chip>
      </div>
    </div>
    <logo />
    <app-skill-search />
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import AppIcon3d from './AppIcon3d.vue'
import VueIcon from '~icons/logos/vue?raw'
import GraphQLIcon from '~icons/vscode-icons/file-type-graphql?raw'
import NodeJSIcon from '~icons/logos/nodejs-icon?raw'

// const props = defineProps({});

// const emit = defineEmits({});

const { t } = useI18n()
</script>

<style lang="scss" scoped>
.icons{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 1em;
    gap: 2em;
.icon3d {

}
}
</style>

<i18n locale="en">
{
    "WHAT_I_DO": "What I do"
}
</i18n>

<i18n locale="pl">
{
    "WHAT_I_DO": "Co robię"
}
</i18n>

<i18n locale="es">
{
    "WHAT_I_DO": "Lo que hago"
}
</i18n>
