import { Color, Line3, Vector3 } from 'three'
import type { DeepReadonly } from 'vue'
import type { JJKData } from './Data'
import type { AppLocale, I18NString } from './modules/i18n'
import { availableLocales } from './modules/i18n'

export type I18n<T extends string, TKey extends string = string> = {
  [key in AppLocale]: T;
} & {
  key: TKey
}

export const variables = {
  colorPrimary: '#00ffce',
  colorSecondary: '#797ef7',
  colorText: '#c5fffe',
  colorBackground: '#001427',
}

export const resolveCSSVar = (variable: string) =>
  getComputedStyle(document.querySelector('body')!).getPropertyValue(variable)

export const colorToHex = (color: string) => new Color(color.trim()).getHex()

export const cssVarToHex = (variable: string) =>
  colorToHex(resolveCSSVar(variable))

export const getAngle = (
  point1: Vector3,
  point2: Vector3,
  offset = 0,
) => {
  const helperPoint = new Vector3(point2.x, point1.y, 0)

  const helperLine1 = new Line3(point2, helperPoint)
  const helperLine2 = new Line3(helperPoint, point1)

  const isPositive = point2.y - point1.y > 0
  const angleRaw = Math.atan(helperLine1.distance() / helperLine2.distance())

  return isPositive ? 2 * Math.PI - angleRaw + offset : angleRaw + offset
}

const isNode = () => {
  try { return this === global }
  catch (e) { return false }
}

export const defineData = <T extends DeepReadonly<JJKData>>(data: T) => {
  if (isNode()) {
    const write = async () => {
      const { writeFileSync } = await import('fs')
      const { resolve } = await import('path')
      writeFileSync(resolve('Data.json'), JSON.stringify(data))
    }
    write()
  }
  return data
}

export interface VersionInfo {
  number: `${number}.${number}.${number}`
  date: `${number}-${number}-${number}`
  channel: 'stable' | 'beta' | 'alpha' | 'dev'
}

export const defineVersion = <T extends DeepReadonly<VersionInfo>>(options: T) => options

export const versionInfo = defineVersion({
  number: '8.1.0',
  date: '2022-06-13',
  channel: 'dev',
})

export const guessLocale = () => {
  const userLangs = navigator.languages ? navigator.languages.map(lang => lang.split('-')[0]) : ['en']

  return userLangs.find(lang => (availableLocales as string[]).includes(lang)) as AppLocale || 'en'
}

export const addMessage = <T extends string>(data: I18NString, key: T) =>
  Object.entries(data).map(([locale, message]) => [locale, { [key]: message }] as const).reduce<Record<keyof typeof data, Record<typeof key, string>>>((acc, [locale, message]) => ({ ...acc, [locale]: message }), {} as any)
