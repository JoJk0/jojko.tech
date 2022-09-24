import { getDownloadURL, getStorage, ref as storageRef } from '@firebase/storage'
import { cvStoragePath } from 'functions/src/config'
import { useFirebase } from '~/modules/firebase'

export const useCVLink = () => {
  const cvLink = ref<string>()
  const loading = ref(false)
  const error = ref(false)

  const firebase = useFirebase()
  const storage = getStorage(firebase)

  const cvRef = storageRef(storage, cvStoragePath);

  (async () => {
    loading.value = true
    cvLink.value = await getDownloadURL(cvRef).catch((e) => { error.value = e; loading.value = false; return undefined })
    loading.value = false
  })()

  return {
    cvLink,
    loading,
    error,
  }
}
