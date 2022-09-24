import { getFunctions, httpsCallable } from '@firebase/functions'
import type { SendMailCallData } from 'functions/src/utils'
import { useFirebase } from '~/modules/firebase'

export const useEmailSender = () => {
  const isSuccess = ref(false)

  const isSending = ref(false)

  const error = ref<string | boolean>(false)

  const firebase = useFirebase()

  const functions = getFunctions(firebase)

  const fn = httpsCallable<SendMailCallData, boolean>(functions, 'sendMail')

  const sendMail = async (data?: SendMailCallData | null | undefined) => {
    isSending.value = true
    await fn(data).catch((e) => {
      error.value = e
      isSending.value = false
    })
    isSending.value = false
    isSuccess.value = true
  }

  return {
    isSuccess,
    isSending,
    error,
    sendMail,
  }
}
