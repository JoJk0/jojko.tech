import { createI18n } from 'vue-i18n'
import type { UserModule } from '~/types'
import { guessLocale } from '~/utils'

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import

export type AppLocale = 'en' | 'pl' | 'es'

export type I18NString = {
  [key in AppLocale]: string;
}

export const availableLocales: AppLocale[] = ['en', 'pl', 'es']

const messages = Object.fromEntries(
  Object.entries(
    import.meta.globEager('../../locales/*.y(a)?ml'))
    .map(([key, value]) => {
      const yaml = key.endsWith('.yaml')
      return [key.slice(14, yaml ? -5 : -4), value.default]
    }),
)

export const install: UserModule = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: guessLocale(),
    availableLocales,
    messages,
  })

  app.use(i18n)
}
