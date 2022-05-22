<template>
  <div class="socials" :class="{ inline }">
    <div v-for="{name, url, urlName } of socials" :key="name" class="social">
      <a :href="url" target="_blank">
        <app-tooltip :text="urlName">
          <div v-if="name === 'Twitter'" i-feather-twitter :title="name" />
          <div v-else-if="name === 'GitHub'" i-feather-github :title="name" />
          <div v-else-if="name === 'Instagram'" i-feather-instagram :title="name" />
          <div v-else-if="name === 'LinkedIn'" i-feather-linkedin :title="name" />
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
    }
    &.inline {
        flex-direction: row;
    }
}
</style>
