<template>
  <div class="socials" :class="{ inline }">
    <div v-for="{ name, url, urlName } of socials" :key="name" class="social">
      <a :href="url" target="_blank">
        <app-tooltip :text="urlName">
          <i-feather-twitter v-if="name === 'Twitter'" :title="name" class="svg-icon" />
          <i-feather-github v-else-if="name === 'GitHub'" :title="name" class="svg-icon" />
          <i-feather-instagram v-else-if="name === 'Instagram'" :title="name" class="svg-icon" />
          <i-feather-linkedin v-else-if="name === 'LinkedIn'" :title="name" class="svg-icon" />
        </app-tooltip>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import data from '../Data'

const props = defineProps({
  // socials: {
  //     type: Array as PropType<JJKSocial[]>
  // }
  inline: {
    type: Boolean,
    default: false,
  },
})

// const emit = defineEmits({});

const { socials } = data
</script>

<style lang="scss" scoped>
.socials {
    display: flex;
    flex-direction: column;
    gap: 1em;
    .social {
      a {
        color: inherit;
        .svg-icon {
          font-size: 1em;

        }
      }
    }
    &.inline {
        flex-direction: row;
    }
}
</style>
