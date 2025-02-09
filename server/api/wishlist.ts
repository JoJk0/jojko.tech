import type { Skill } from '../types'

const wishlist: Skill[] = [
  {
    name: 'React',
    icon: 'logos/react',
  },
  {
    name: 'Next.js',
    icon: 'logos/nextjs-icon',
    inverted: true,
  },
  {
    name: 'Svelte / SvelteKit',
    icon: 'logos/svelte-icon',
  },
  {
    name: 'Deno',
    icon: 'logos/deno',
    inverted: true,
  },
  {
    name: 'Rust',
    icon: 'vscode-icons/file-type-rust',
    inverted: true,
  },
  {
    name: 'RabbitMQ',
    icon: 'logos/rabbitmq-icon',
  },
  {
    name: 'Jira',
    icon: 'logos/jira',
  },
  {
    name: 'Kubernetes',
    icon: 'logos/kubernetes',
  },
  {
    name: 'Relay Modern',
    icon: 'logos/relay',
  },
  {
    name: 'MongoDB / DynamoDB',
    icon: 'logos/mongodb-icon',
  },
  {
    name: 'Figma',
    icon: 'logos/figma',
  },
]

export default defineEventHandler(() => wishlist)
