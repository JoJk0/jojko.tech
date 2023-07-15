import { Color, Line3, Vector3 } from 'three'
import type { DeepReadonly } from 'vue'
import type { AppLocale, I18NString } from '~/modules/i18n'
import { availableLocales } from '~/modules/i18n'
import { THUMB_FILENAME } from '~/main'
import type { JJKData } from '~/Data'

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

export function resolveCSSVar(variable: string) {
  return getComputedStyle(document.querySelector('body')!).getPropertyValue(variable)
}

export const colorToHex = (color: string) => new Color(color.trim()).getHex()

export function cssVarToHex(variable: string) {
  return colorToHex(resolveCSSVar(variable))
}

export function getAngle(point1: Vector3,
  point2: Vector3,
  offset = 0) {
  const helperPoint = new Vector3(point2.x, point1.y, 0)

  const helperLine1 = new Line3(point2, helperPoint)
  const helperLine2 = new Line3(helperPoint, point1)

  const isPositive = point2.y - point1.y > 0
  const angleRaw = Math.atan(helperLine1.distance() / helperLine2.distance())

  return isPositive ? 2 * Math.PI - angleRaw + offset : angleRaw + offset
  // return point1.angleTo(point2)
}

function isNode(this: any) {
  try {
    // eslint-disable-next-line no-restricted-globals
    return this === global
  }
  catch (e) { return false }
}

export function defineData<T extends DeepReadonly<JJKData>>(data: T) {
  if (isNode()) {
    const write = async () => {
      const { writeFileSync } = await import('node:fs')
      const { resolve } = await import('node:path')
      writeFileSync(resolve('Data.json'), JSON.stringify(data))
    }
    write()
  }
  return data
}

export function guessLocale() {
  const userLangs = navigator.languages ? navigator.languages.map(lang => lang.split('-')[0]) : ['en']

  return userLangs.find(lang => (availableLocales as string[]).includes(lang)) as AppLocale || 'en'
}

export function addMessage<T extends string>(data: I18NString, key: T) {
  return Object.entries(data).map(([locale, message]) => [locale, { [key]: message }] as const).reduce<Record<keyof typeof data, Record<typeof key, string>>>((acc, [locale, message]) => ({ ...acc, [locale]: message }), {} as any)
}

export function addMessages<T extends string>(data: Record<T, I18NString>) {
  return Object.entries<I18NString>(data)
}

export function getThumbFilename(filename: string) {
  const filenameArr = filename.split('.')
  const extension = filenameArr.pop()

  filenameArr.push(THUMB_FILENAME)

  return extension ? [filenameArr.join(''), extension].join('.') : undefined
}

export function clamp01(a: number) {
  return a < 0 ? 0 : a > 1 ? 1 : a
}
