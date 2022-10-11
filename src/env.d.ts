/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SPOTIFY_TOKEN: string
  readonly VITE_GRECAPTCHA_SITE_KEY: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
