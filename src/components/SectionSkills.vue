<template>
  <section id="skills" :class="{ mobile }">
    <app-title>{{ t('WHAT_I_DO') }}</app-title>
    <div class="content">
      <div class="left">
        <div class="icons">
          <div v-for="{ name, icon } of topSkills" :key="name" class="top-skill">
            <AppIcon :api-icon="icon" class="top-skill-icon" />
            <!-- <app-icon3d :icon="VueIcon" width="20em" height="20em" class="icon3d" /> -->
            <app-chip :size="mobile ? 'small' : 'x-large'">
              {{ name }}
            </app-chip>
          </div>
        </div>
        <app-skill-search />
      </div>
      <div class="right">
        <logo />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import AppIcon3d from './AppIcon3d.vue'
import VueIcon from '~icons/logos/vue?raw'
import GraphQLIcon from '~icons/vscode-icons/file-type-graphql?raw'
import NodeJSIcon from '~icons/logos/nodejs-icon?raw'

const { mobile } = useDisplay()

// const props = defineProps({});

// const emit = defineEmits({});

const { t } = useI18n()

const topSkills = [
  {
    name: 'Vue 3',
    icon: 'logos/vue',
  },
  {
    name: 'GraphQL',
    icon: 'logos/graphql',
  },
  {
    name: 'Node.js',
    icon: 'logos/nodejs-icon',
  },
]
</script>

<style lang="scss" scoped>
.icons{
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    flex-wrap: wrap;
    margin: 1em;
.icon3d {

}
}
.content {
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  .left, .right {
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  .left {
    flex: 1;
  }
}
.top-skill {
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  .top-skill-icon {
    font-size: 8em;
  }
}
#skills.mobile {
  .top-skill-icon {
    font-size: 4em;
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
