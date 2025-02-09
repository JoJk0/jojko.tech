import { ref } from 'vue'
import { sleep } from '~/utils'

const removeLetterTime = 100
const addLetterTime = 200
const waitTime = 3000

export function useAnimatedName<T extends string>(names: Ref<T[] | null>) {
  const currentName = ref<string>('')

  onMounted(() => names.value?.reduce(async (previousName, name, i) => {
    await previousName

    await addName(currentName, name)

    await sleep(waitTime)

    await removeName(currentName)

    if (i === names.value!.length - 1)
      await addName(currentName, names.value![0])
  }, Promise.resolve()))

  return currentName
}

async function addName(toRef: Ref<string>, newName: string) {
  return newName.split('').reduce(async (previousChar, char) => {
    await previousChar
    toRef.value += char
    await sleep(addLetterTime)
  }, Promise.resolve())
}

async function removeName(name: Ref<string>) {
  return name.value.split('').reduce(async (previousDeletion) => {
    await previousDeletion
    name.value = name.value.slice(0, -1)
    await sleep(removeLetterTime)
  }, Promise.resolve())
}
