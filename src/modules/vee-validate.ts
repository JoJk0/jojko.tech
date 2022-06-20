import type { App } from 'vue'
import { configure, defineRule } from 'vee-validate'
import { email, required } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import { guessLocale } from '~/utils'

export const install = (_: App) => {
  // Define the rule globally
  defineRule('required', required)
  defineRule('email', email)
  configure({
    generateMessage: localize({
      en: {
        messages: {
          required: 'This field is required',
        },
      },
      pl: {
        messages: {
          required: 'To pole jest wymagane',
        },
      },
      es: {
        messages: {
          required: 'Este campo es obligatorio',
        },
      },
    }),
  })

  setLocale(guessLocale())
}
