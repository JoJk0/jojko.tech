import { connectFunctionsEmulator, getFunctions, httpsCallable } from '@firebase/functions'
import type { SendMailCallData } from 'functions/src/utils'
import { useReCaptcha } from 'vue-recaptcha-v3'
import { useVersion } from './useVersion'
import { useFirebase } from '~/modules/firebase'

export interface UseEmailSenderInput {
  name: string
  email: string
  message: string
  topic: string
  receipt: boolean
}

export const useEmailSender = () => {
  const isSuccess = ref(false)

  const isSending = ref(false)

  const error = ref<string | boolean>(false)

  const firebase = useFirebase()

  const { isDev } = useVersion()

  const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()!

  const functions = getFunctions(firebase, 'europe-west2')

  if (isDev)
    connectFunctionsEmulator(functions, 'localhost', 2139)

  const fn = httpsCallable<SendMailCallData, boolean>(functions, 'sendMail')

  const successEvent = new CustomEvent('sendMail:success')

  const sendMail = async (data: UseEmailSenderInput) => {
    try {
      isSending.value = true
      await recaptchaLoaded()
      const gRecaptchaToken = await executeRecaptcha('login')

      await fn({
        ...data,
        receipt: data.receipt ? 'true' : 'false',
        gRecaptchaToken,
      })

      isSuccess.value = true
      window.dispatchEvent(successEvent)
    }
    catch (e: any) {
      error.value = e
      isSending.value = false
    }
    finally {
      isSending.value = false
    }
  }

  const onSuccess = (fn: () => any) => {
    window.addEventListener('sendMail:success', fn)
  }

  return {
    isSuccess,
    isSending,
    error,
    sendMail,
    onSuccess,
  }
}
