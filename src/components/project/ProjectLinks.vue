<template>
  <div class="links" :class="{ mobile }">
    <div v-if="links?.github" class="link github">
      <img src="https://api.iconify.design/akar-icons/github.svg" class="icon">
      <div class="right">
        <div v-if="!mobile" class="info">
          <div class="top">
            <span class="name">{{ githubUsername }}</span>
            <span class="slash">/</span>
          </div>
          <div class="repo">
            {{ githubRepoName }}
          </div>
        </div>
        <v-btn rounded="pill" color="black" :href="links.github" target="_blank" class="btn-classic" :variant="mobile ? 'text' : undefined">
          {{ t('VIEW_ON_GITHUB') }}
        </v-btn>
      </div>
    </div>
    <AppButton v-if="links?.live" primary prepend-icon="public" :href="links.live" target="_blank">
      {{ t('VISIT_WEBSITE') }} <app-icon icon="open_in_new" />
    </AppButton>
    <AppButton v-if="links?.copy" primary prepend-icon="play_arrow" :href="links.copy" target="_blank">
      {{ t('VIEW_COPY') }} <app-icon icon="open_in_new" />
    </AppButton>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { useI18n } from 'vue-i18n'
import type { JJKProject } from '~/Data'

const props = defineProps({
  links: {
    type: Object as PropType<JJKProject['urls']>,
  },
})

// const emit = defineEmits({})

const { t } = useI18n()

const { mobile } = useDisplay()

const githubRegex = /https:\/\/github.com\/(.*)\/(.*)/g

const githubMatches = computed(() => props.links ? githubRegex.exec(props.links.github) : undefined)
const githubUsername = computed(() => githubMatches.value ? githubMatches.value[1] : undefined)
const githubRepoName = computed(() => githubMatches.value ? githubMatches.value[2] : undefined)
</script>

<style lang="scss" scoped>
.btn-classic {
        text-transform: unset;
        letter-spacing: inherit;
        font-weight: 600;
    }
    .links {
        display: flex;
        flex-direction: column;
        gap: 1em;
        .link {
            padding: 1em;
            display: flex;
            gap: 1em;
            .icon {
                font-size: 2em;
                width: 1em;
                height: 1em;
            }
            &.github {
                background-color: white;
                color: black;
                width: fit-content;
                border-radius: 2em;
                .icon {

                }
                .right {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5em;
                    .info {
                        display: flex;
                        flex-direction: column;
                        .top {
                            font-size: 0.9em;
                            display: flex;
                            align-items: center;
                            gap: 0.4em;
                            .name {

                            }
                            .slash {
                                opacity: 0.3;
                                font-size: 0.8em;
                                font-weight: 800;
                            }
                        }
                        .repo {
                            font-weight: 800;
                            font-size: 1.1em;
                        }
                    }
                    .btn-classic {
                        align-self: flex-end;
                    }
                }
            }
        }
    }
    .links.mobile {
      .link {
        padding: 0;
            align-items: center;
              gap: 0;
                border-radius: calc($border-radius-root / 1.3) $border-radius-root calc($border-radius-root / 1.3) $border-radius-root;
        .icon {
          scale: 0.8;
          margin-left: 0.2em;
        }
        .btn-classic {
          padding-left: 0.5em;
        }
      }
    }
</style>

<i18n locale="en">
{
  "VIEW_ON_GITHUB": "View on GitHub",
  "VISIT_WEBSITE": "Visit website",
  "VIEW_COPY": "View copy"
}
</i18n>

<i18n locale="pl">
{
  "VIEW_ON_GITHUB": "Zobacz na GitHub'ie",
  "VISIT_WEBSITE": "Odwiedź stronę",
  "VIEW_COPY": "Zobacz kopię"
}
</i18n>

<i18n locale="es">
{
  "VIEW_ON_GITHUB": "Ver en GitHub",
  "VISIT_WEBSITE": "Visitar sitio",
  "VIEW_COPY": "Ver copia"
}
</i18n>
