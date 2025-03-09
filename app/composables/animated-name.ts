import { ref } from "vue";
import { sleep } from "~/utils";

const removeLetterTime = 100;
const addLetterTime = 200;
const waitTime = 3000;

export function useAnimatedName<T extends string>(names: Ref<T[] | undefined>) {
  const currentName = ref<string>("");

  function addName(newName: string) {
    return newName.split("").reduce(async (previousChar, char) => {
      await previousChar;
      currentName.value += char;
      await sleep(addLetterTime);
    }, Promise.resolve());
  }

  function removeName() {
    return currentName.value.split("").reduce(async (previousDeletion) => {
      await previousDeletion;
      currentName.value = currentName.value.slice(0, -1);
      await sleep(removeLetterTime);
    }, Promise.resolve());
  }

  onMounted(() =>
    names.value?.reduce(async (previousName, name, i) => {
      await previousName;

      await addName(name);

      await sleep(waitTime);

      await removeName();

      if (i === names.value!.length - 1)
        await addName(names.value![0]!);
    }, Promise.resolve()),
  );

  return currentName;
}

