import { getDownloadURL, getStorage, list, ref as storageRef } from '@firebase/storage'
import { useFirebase } from '~/modules/firebase'

export function useStorageFile(file: string) {
  const firebase = useFirebase()

  const storage = getStorage(firebase)

  const fileRef = storageRef(storage, file)

  const url = ref<string>();

  (async () => {
    url.value = await getDownloadURL(fileRef)
  })()

  return url
}

export function useStorageFiles(dir: string) {
  const firebase = useFirebase()

  const storage = getStorage(firebase)

  const dirRef = storageRef(storage, dir)

  const urls = ref<{ filename: string; url: string }[]>();

  (async () => {
    const itemRefs = (await list(dirRef)).items

    urls.value = await Promise.all(itemRefs.map(async itemRef => ({
      filename: itemRef.name,
      url: await getDownloadURL(itemRef),
    })))
  })()

  return urls
}
