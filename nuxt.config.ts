import { pwa } from './app/config/pwa'
import { appDescription } from './app/constants/index'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    'unplugin-icons/nuxt',
    '@nuxt/eslint',
  ],

  components: [
    '~/components',
    '~/partials',
  ],
  devtools: {
    enabled: true,
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.svg', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', content: '#222222' },
      ],
    },
  },

  css: [
    'jjk-ui/styles',
    '~/assets/style.css',
  ],

  colorMode: {
    classSuffix: '',
  },
  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  compatibilityDate: '2025-02-02',

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  vite: {
    server: {
      fs: {
        allow: ['../jjk-ui'],
      },
    },
    define: {
      __TIMESTAMP__: JSON.stringify(new Date().getTime()),
    },
    // plugins: [
    //   VueI18n({
    //     runtimeOnly: true,
    //     compositionOnly: true,
    //     fullInstall: true,
    //     include: [resolve(__dirname, 'locales/**')],
    //   }),
    // ]
  },
  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  i18n: {
    locales: ['en', 'pl', 'es'],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
  },

  pwa,
})
