<script lang="ts" setup>
import { AppChip } from 'jjk-ui'
import { useI18n } from 'vue-i18n'

const { number, isUnstable, channel, milestone } = useVersion()

// const props = defineProps({});

// const emit = defineEmits({});

const config = useRuntimeConfig()

const { __TIMESTAMP__ } = config.public

const { t } = useI18n()

const thisYear = new Date().getFullYear()

</script>

<template>
  <footer>
    <div v-if="isUnstable" class="version-status">
      <div class="top">
        <AppChip>{{ channel === 'dev' ? channel.toUpperCase() : milestone.toUpperCase() }}</AppChip>
        <div class="version-info">
          {{ t('UNSTABLE') }}
        </div>
      </div>
      <p>{{ t('BUGS') }}</p>
    </div>
    <app-socials inline />
    <div class="footer">
      © 2011 - {{ thisYear }} jojko.tech
    </div>
    <div class="version">
      v{{ number }}<br>
      Last updated: {{ __TIMESTAMP__ }}
    </div>
  </footer>
</template>

<style scoped>
footer {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  padding: 2em;
  .version-status {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5em;
    .version-info {
      font-weight: 500;
    }
  }
  p {
    opacity: 0.7;
    font-size: 0.9em;
  }
  .version {
    font-size: 0.7em;
    opacity: 0.5;
  }
}
</style>

<i18n locale="en">
{
  "UNSTABLE": "This website has just been released and may be unstable.",
  "BUGS": "Should you have any bugs discovered, send a bug report on Github or through contact form."
}
</i18n>

<i18n locale="pl">
{
  "UNSTABLE": "Ta strona jest wciąż w fazie testów i może być niestabilna.",
  "BUGS": "Jeśli znalazłeś błąd, zgłoś go na Github'ie lub poprzez formularz kontaktowy."
}
</i18n>

<i18n locale="es">
{
  "UNSTABLE": "Este sitio web está en fase de pruebas y puede estar inestable",
  "BUGS": "Si encuentras algún error, envíalo a Github o a través del formulario de contacto."
}
</i18n>
