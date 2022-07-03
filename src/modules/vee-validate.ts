import type { App } from 'vue'
import { configure, defineRule } from 'vee-validate'
import { alpha_spaces, email, required } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import { guessLocale } from '~/utils'

export const install = (_: App) => {
  // Define the rule globally
  defineRule('required', required)
  defineRule('email', email)
  defineRule('alpha_spaces', alpha_spaces)

  configure({
    generateMessage: localize({
      en: {
        messages: {
          required: 'You need to enter a value',
          email: 'This is not a valid email',
          alpha_spaces: 'Only alphabetic and spaces are allowed',
        },
      },
      pl: {
        messages: {
          required: 'Wypełnij to pole',
          email: 'To nie jest legitny adres emailowy',
          alpha_spaces: 'Tylko litery i spacje są dozwolone',
        },
      },
      es: {
        messages: {
          required: 'Este campo es obligatorio',
          email: 'Este no es un email válido',
          alpha_spaces: 'Solo se permiten letras y espacios',
        },
      },
    } as const),
  })

  setLocale(guessLocale())
}
