<template>
  <v-app class="material-theme">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg

useHead({
  title: 'jojko.tech | Jacob Janisz | Full-stack developer',
  meta: [
    { name: 'description', content: 'Full-stack developer & designer' },
    {
      name: 'theme-color',
      content: '#001427',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    },
  ],
})
</script>

<style lang="scss">
@import "./src/styles/theme";

html,
body,
#app {
  margin: 0;
  padding: 0;
  background: $color-background;
  color: $color-text;
  font-family: $body-font-family;
  color-scheme: dark;
}

#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: $color-primary;
  opacity: 0.75;
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
}
section {
    padding: 0 max(calc(calc(100vw - $container-max-width) / 2), $container-margin);
    width: 100vw;
    min-height: 100vh;
}
</style>
