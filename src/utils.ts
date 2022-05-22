import { Color, Line3, Vector3 } from 'three'
import type { AppLocale } from './modules/i18n'

export type I18n<T extends string, TKey extends string = string> = {
  [key in AppLocale]: T;
} & {
  key: TKey
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

export const defineData = <T>(data: T) => {
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
