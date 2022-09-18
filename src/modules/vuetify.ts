// Styles
import 'vuetify/styles'

// Vuetify
import type { IconProps, IconSet, ThemeDefinition } from 'vuetify'

import { createVuetify } from 'vuetify'
import { VLigatureIcon } from 'vuetify/components'
import type { UserModule } from '~/types'

const jjkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    'background': '#001427',
    'surface': '#001427',
    'primary': '#00ffce',
    'primary-darken-1': '#00ffc0',
    'secondary': '#797ef7',
    'secondary-darken-1': '#797ef7',
    'tertiary': '#c5fffe',
    'error': '#B00020',
    'info': '#2196F3',
    'success': '#4CAF50',
    'warning': '#FB8C00',
  },
}

const md: IconSet = {
  component: (props: IconProps) => {
    return h(VLigatureIcon, {
      ...props,
      class: 'material-symbols-outlined',
    })
  },
}

export const install: UserModule = ({ app }) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'jjkTheme',
      themes: { jjkTheme },
    },
    icons: { defaultSet: 'md', sets: { md } },
  })
  app.use(vuetify)
}
