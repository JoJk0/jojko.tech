import type { DeepReadonly } from 'vue'

export interface VersionInfo {
  number: `${number}.${number}.${number}`
  date: `${number}-${number}-${number}`
  channel: 'prod' | 'dev'
  milestone: 'alpha' | 'beta' | 'stable'
}

export const defineVersion = <T extends DeepReadonly<VersionInfo>>(options: T) => options

export const versionInfo = defineVersion({
  number: '8.1.0',
  date: '2022-06-13',
  channel: import.meta.env.DEV ? 'dev' : 'prod',
  milestone: 'alpha',
})

export function useVersion() {
  const { channel, number, milestone } = versionInfo

  const isUnstable = channel === 'dev' || milestone === 'alpha' || milestone === 'beta'

  const isDev = channel === 'dev'

  return {
    channel,
    number,
    milestone,
    isUnstable,
    isDev,
  }
}
