<template>
  <v-app>
    <v-main>
      <app-sidebar />
      <router-view />
      <app-footer />
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
