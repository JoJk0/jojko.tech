import { VueReCaptcha } from 'vue-recaptcha-v3'
import type { IReCaptchaOptions } from 'vue-recaptcha-v3/dist/IReCaptchaOptions'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  const options: Partial<IReCaptchaOptions> = {
    siteKey: import.meta.env.VITE_GRECAPTCHA_SITE_KEY,
  }

  app.use(VueReCaptcha, options)
}
