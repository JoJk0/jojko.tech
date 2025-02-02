const topSkills = [
  {
    name: 'Vue',
    icon: 'logos/vue',
  },
  {
    name: 'GraphQL',
    icon: 'logos/graphql',
  },
  {
    name: 'Storybook',
    icon: 'logos/storybook-icon',
  },
] as const

export default defineEventHandler(() => topSkills)
