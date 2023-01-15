import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface AppImage {
  url: string
  alt: string
  thumbnail?: string
}
