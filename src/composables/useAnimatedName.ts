import { ref } from 'vue'
import gsap from 'gsap'

export const useAnimatedName = <T extends string>(names: T[]) => {
  const removeLetterTime = 0.1
  const addLetterTime = 0.2
  const waitTime = 3

  const currentName = ref<string>('')

  const animate = () => {
    const timeline = gsap.timeline({ repeat: -1, delay: 1 })

    names.forEach((name) => {
      // Add new name
      name.split('').forEach((_, j) =>
        timeline.call(
          () => {
            currentName.value = currentName.value + name.charAt(j)
          },
          [],
          `+=${addLetterTime}`,
        ),
      )

      // Wait
      timeline.call(() => {}, [], `+=${waitTime}`)

      // Remove old name
      const oldString = name

      oldString.split('').forEach(_ =>
        timeline.call(
          () => {
            currentName.value = currentName.value.slice(0, -1)
          },
          [],
          `+=${removeLetterTime}`,
        ),
      )
    })
  }

  return {
    currentName,
    animate,
  }
}
