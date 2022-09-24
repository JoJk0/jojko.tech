import { inject, provide } from 'vue'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { UserModule } from '~/types'

const GSAP = Symbol('GSAP')

export const createGSAP = () => {
  const gsapInstance = gsap

  gsapInstance.registerPlugin(ScrollTrigger)
  gsapInstance.registerPlugin(ScrollToPlugin)

  return gsapInstance
}

export const provideGSAP = () => provide(GSAP, createGSAP())

export const useGSAP = () => {
  const instance = inject<typeof gsap>(GSAP)
  if (!instance)
    throw new Error('GSAP is not provided')

  return instance
}

export const install: UserModule = ({ app }) => {
  const gsap = createGSAP()

  app.provide(GSAP, gsap)
}
