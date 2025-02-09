export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'en',
  messages: {
    en: {
      welcome: 'Welcome',
    },
    pl: {
      welcome: 'Witaj',
    },
    es: {
      welcome: 'Bienvenido',
    },
  },
}))
