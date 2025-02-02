import { ref } from 'vue'
import { sleep } from '~/utils'

const removeLetterTime = 100
const addLetterTime = 200
const waitTime = 3000

export const useAnimatedName = <T extends string>(names: Ref<T[] | null>) => {

  const currentName = ref<string>('')

  onMounted(() => names.value?.reduce(async (previousName, name, i) => {

    await previousName

    await addName(currentName, name)

    await sleep(waitTime)

    await removeName(currentName)

    if(i === names.value!.length - 1)
      await addName(currentName, names.value![0])

  }, Promise.resolve()))

  return currentName
}

const addName = async (toRef: Ref<string>, newName: string) => newName.split('').reduce(async (previousChar, char) => {

  await previousChar
  toRef.value += char
  await sleep(addLetterTime)

}, Promise.resolve())

const removeName = async (name: Ref<string>) => name.value.split('').reduce(async (previousDeletion) => {

  await previousDeletion
  name.value = name.value.slice(0, -1)
  await sleep(removeLetterTime)

}, Promise.resolve())
