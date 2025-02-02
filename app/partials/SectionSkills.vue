<template>
  <section id="skills" arial-labelledby="skills-title">
    <h2 class="gradiented step-5" id="skills-title">{{ t('WHAT_I_DO') }}</h2>
    <div class="content">
      <AppSkills />
      <AppTopSkills />
    </div>
  </section>
</template>

<script lang="ts" setup>
// const props = defineProps({})

// const emit = defineEmits({})

const { t } = useI18n()
</script>

<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--space-m) * 5);
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
