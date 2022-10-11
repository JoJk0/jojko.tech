import { versionInfo } from '~/utils'

export const useVersion = () => {
  const { channel, number } = versionInfo

  const isUnstable = ['alpha', 'beta', 'dev'].includes(channel)

  const isDev = channel === 'dev'

  return {
    channel,
    number,
    isUnstable,
    isDev,
  }
}
