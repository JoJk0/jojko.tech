<template>
  <div class="socials" :class="{ inline }">
    <div v-for="{ name, url, urlName } of socials" :key="name" class="social">
      <a :href="url" target="_blank">
        <app-tooltip :text="urlName">
          <i-feather-twitter v-if="name === 'Twitter'" :title="name" />
          <i-feather-github v-else-if="name === 'GitHub'" :title="name" />
          <i-feather-instagram v-else-if="name === 'Instagram'" :title="name" />
          <i-feather-linkedin v-else-if="name === 'LinkedIn'" :title="name" />
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
      }
    }
    &.inline {
        flex-direction: row;
    }
}
</style>
