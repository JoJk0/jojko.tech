<script lang="ts" setup>
import IconGithub from "~icons/line-md/github";
import IconLinkedin from "~icons/line-md/linkedin";
import IconMastodon from "~icons/line-md/mastodon";
import IconTwitter from "~icons/line-md/twitter";
import { AppTooltip } from "jjk-ui";

defineProps({
  inline: {
    type: Boolean,
    default: false,
  },
});

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

<template>
  <div class="socials" :class="{ inline }">
    <div
      v-for="{ name, url, urlName, icon } of socials"
      :key="name"
      class="social"
    >
      <a :href="url" target="_blank">
        <AppTooltip position="block-end">
          <template #trigger>
            <component :is="icon" :title="name" class="svg-icon" />
          </template>
          {{ urlName }}
        </AppTooltip>
      </a>
    </div>
  </div>
</template>

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
