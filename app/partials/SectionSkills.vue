<script lang="ts" setup>
import IconLibrary from "~icons/material-symbols/collections-bookmark-outline-rounded";
import IconTools from "~icons/material-symbols/design-services-outline-rounded";
import IconDesign from "~icons/material-symbols/square-foot";
// const props = defineProps({})

// const emit = defineEmits({})

const { t } = useI18n();

const skills = [
  {
    title: "UI libraries",
    icon: IconLibrary,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend dolor.",
  },
  {
    title: "Design systems",
    icon: IconDesign,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend dolor.",
  },
  {
    title: "DX tooling",
    icon: IconTools,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend dolor.",
  },
] as const;
</script>

<template>
  <section id="skills" arial-labelledby="skills-title">
    <div class="start">
      <header>
        <h2 id="skills-title" class="gradiented step-5">
          {{ t("WHAT_I_DO") }}
        </h2>
        <div class="text">Lorem ipsum dolor sit amet</div>
      </header>
      <main class="content">
        <div class="cards">
          <AppSkillCard
            v-for="({ title, icon, description }, id) of skills"
            :key="id"
            :title
            :icon
            :description
          />
        </div>
      </main>
    </div>
    <AppTechStack />
  </section>
</template>

<style scoped>
#skills {
  max-width: var(--page-max-width);
  display: flex;
  z-index: 1;
  align-self: center;
  gap: var(--space-l);
  width: 100%;
  margin-block-start: var(--space-3xl);

  .start {
    display: flex;
    flex-direction: column;
    gap: var(--space-l);
    flex: 1;
  }

  header {
    display: flex;
    flex-direction: column;
    gap: var(--space-2xs);
    padding-inline: var(--space-m);
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-s);
    align-items: start;

    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-m);
    }
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
      "WHAT_I_DO": "¿Lo que hago?"
  }
  </i18n>
