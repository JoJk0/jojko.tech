export interface UseTimerOptions {
  immediate: boolean
}

const PRECISION_MS = 100

export const useTimer = (ms: number, options?: UseTimerOptions) => {
  const onFinishedEvent = new CustomEvent('ticker:finished')
  const onStoppedEvent = new CustomEvent('ticker:stopped')
  const onResumedEvent = new CustomEvent('ticker:resumed')
  const onResetEvent = new CustomEvent('ticker:reset')

  const { counter, pause, resume, isActive } = useInterval(PRECISION_MS, {
    controls: true,
    immediate: options?.immediate,
    callback: (count) => {
      if (count * PRECISION_MS >= ms)
        document.dispatchEvent(onFinishedEvent)
    },
  })

  const progress = computed(() => counter.value * PRECISION_MS)

  const progressPercent = computed(() => (progress.value / ms) * 100)

  const reset = () => {
    counter.value = 0
    document.dispatchEvent(onResetEvent)
  }

  const start = () => {
    if (progress.value >= ms)
      reset()
    resume()
    document.dispatchEvent(onResumedEvent)
  }

  const stop = () => {
    pause()
    document.dispatchEvent(onStoppedEvent)
  }

  const onFinished = (fn: (progress: number) => any) => {
    document.addEventListener('ticker:finished', () => fn(progress.value))
  }
  const onStop = (fn: (progress: number) => any) => {
    document.addEventListener('ticker:stopped', () => fn(progress.value))
  }
  const onResume = (fn: (progress: number) => any) => {
    document.addEventListener('ticker:resumed', () => fn(progress.value))
  }
  const onReset = (fn: (progress: number) => any) => {
    document.addEventListener('ticker:reset', () => fn(progress.value))
  }

  return {
    progress,
    progressPercent,
    isActive,
    start,
    stop,
    reset,
    onFinished,
    onStop,
    onReset,
    onResume,
  }
}
