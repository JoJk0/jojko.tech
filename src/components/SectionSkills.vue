<template>
  <section id="skills" :class="{ mobile }">
    <app-title class="title">
      {{ t('WHAT_I_DO') }}
    </app-title>
    <div class="content">
      <div class="left">
        <div class="icons">
          <div v-for="{ name, icon } of topSkills" :key="name" class="top-skill">
            <AppIcon :icon="icon" class="top-skill-icon" />
            <!-- <app-icon3d :icon="VueIcon" width="20em" height="20em" class="icon3d" /> -->
            <app-chip :size="mobile ? 'small' : 'x-large'" class="chip">
              {{ name }}
            </app-chip>
          </div>
        </div>
        <app-skill-search />
      </div>
      <div id="glow-logo" class="right">
        <logo />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import data from '~/Data'

const { mobile } = useDisplay()

// const props = defineProps({});

// const emit = defineEmits({});

const { t } = useI18n()

const { topSkills } = data
</script>

<style lang="scss" scoped>
.icons{
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    margin: 1em;
    gap: 2em;
}
.content {
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  padding: 0 max($page-margin, (100vw - $page-max-width) / 2);
  .left, .right {
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 3em;
    max-width: calc(100vw - 2rem);
    flex: 1;
  }
  .left {
    max-width: min(100%, 56em);
    z-index: 2;
  }
  .right {
    justify-content: center;
    align-items: center;
        &:before {
            content: "";
            display: block;
            background: $main-gradient;
            opacity: 0.7;
            filter: blur(10em);
            border-radius: 100%;
            width: 30rem;
            height: 30rem;
            position: absolute;
          }
  }
}
.top-skill {
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
    aspect-ratio: 1;
  position: relative;
  .chip {

  }
  .top-skill-icon {
    font-size: 6em;
    display: flex;
    aspect-ratio: 1;
      z-index: 1;
  }
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
      border: 1px solid rgba(255, 255, 255, 0.05);
    position: absolute;
    scale: 1.7 1.2;
    translate: 0 -2em;
    aspect-ratio: 1;
  }
  &:nth-of-type(1):before{
    border-radius: 46% 54% 42% 58% / 30% 51% 49% 70%;
  }
  &:nth-of-type(2):before{
    border-radius: 66% 34% 42% 58% / 46% 51% 49% 54%;
  }
  &:nth-of-type(3):before{
    border-radius: 49% 51% 60% 40% / 64% 51% 49% 36%;
  }
}
#skills {
  display: flex;
  flex-direction: column;
  gap: 4em;
  padding-left: 0;
  padding-right: 0;
  .title {
    padding-left: max($page-margin, (100vw - $page-max-width) / 2);
  }
}
#skills.mobile {
  gap: 2em;
  .content {
    padding: 0;
  }
  .left, .right {
    gap: 2em;
  }
  .right:before{
    width: 20rem;
    height: 20rem;
    filter: blur(7em);
  }
  .top-skill-icon {
    font-size: 4em;
  }
  .top-skill:before {
    scale: 1.5 0.8;
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
