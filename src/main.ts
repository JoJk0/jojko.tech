import { ViteSSG } from 'vite-ssg'
import { createApp as createVueApp } from 'vue'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import { loadFonts } from './modules/webfontloader'
import generatedRoutes from '~pages'
import './styles/material-icons.css'
import './styles/md3.css'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'

loadFonts()

const routes = setupLayouts(generatedRoutes)

const ssg = false

export const createApp = ssg ? ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
  },
) : undefined
// https://github.com/antfu/vite-ssg

const app = createVueApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

app.use(router)
app.use(createHead())

Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.({ app, router }))

router.isReady().then(() => {
  app.mount('#app')
})
