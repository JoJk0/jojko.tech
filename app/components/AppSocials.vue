<template>
  <div class="socials" :class="{ inline }">
    <div
      v-for="{ name, url, urlName, icon } of socials"
      :key="name"
      class="social"
    >
      <a :href="url" target="_blank">
        <app-tooltip position="bottom">
          <component :is="icon" :title="name" class="svg-icon" />
          <template #content>
            {{ urlName }}
          </template>
        </app-tooltip>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { AppTooltip } from "jjk-ui";
import IconMastodon from "~icons/line-md/mastodon";
import IconGithub from "~icons/line-md/github";
import IconTwitter from "~icons/line-md/twitter";
import IconLinkedin from "~icons/line-md/linkedin";

const props = defineProps({
  // socials: {
  //     type: Array as PropType<JJKSocial[]>
  // }
  inline: {
    type: Boolean,
    default: false,
  },
});

// const emit = defineEmits({});

const socials = [
  {
    name: "Github",
    url: "https://github.com/jojk0",
    urlName: "@jojk0",
    icon: IconGithub,
  },
  {
    name: "BlueSky",
    url: "https://bsky.app/profile/jojko.bsky.social",
    urlName: "@jojko.bsky.social",
    icon: IconTwitter,
  },
  {
    name: "Mastodon",
    url: "/mastodon",
    urlName: "@jacob@jojko.tech",
    icon: IconMastodon,
  },
  {
    name: "Linkedin",
    url: "https://linkedin.com/in/jojko",
    urlName: "in/jojko",
    icon: IconLinkedin,
  },
];
</script>

<style scoped>
.socials {
  display: flex;
  gap: 1em;
  .social {
    a {
      color: inherit;
      .svg-icon {
        font-size: var(--step-2);
      }
    }
  }
  &.inline {
    flex-direction: row;
  }
}
</style>
