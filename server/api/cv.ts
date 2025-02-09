import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const __dirname = new URL('.', import.meta.url).pathname

const swoopLogo = (await readFile(resolve(__dirname, '../../app/assets', 'logos', 'swoop.svg'))).toString('base64')
const uolLogo = (await readFile(resolve(__dirname, '../../app/assets', 'logos', 'uol.svg'))).toString('base64')

const cv = {
  headline: {
    name: 'Jakub Janisz',
    subtitle: 'Full Stack Developer',
    pronouns: 'he/him',
  },
  aboutMe: {
    title: 'About me',
    content: `I'm a fast-learning person constantly looking for opportunities to grow and improve existing patterns.I enjoy following latest tech news, participating in beta programs and developing with latest technologies.

My experience allows me to also work with legacy technologies and integrating them with modern systems.

I take care of any piece of code I interact with, in line with Clean Code principles.I always make sure the end- user design is aesthetically pleasing.`,
  },
  contact: [
    // {
    //   name: 'phone',
    //   icon: 'smartphone',
    //   value: '+44 0000 000000',
    // },
    {
      name: 'email',
      icon: 'email',
      value: 'jacob@jojko.tech',
    },
    {
      name: 'linkedin',
      icon: 'https://api.iconify.design/akar-icons/linkedin-fill.svg',
      value: 'linkedin.com/in/jojko',
    },
    {
      name: 'github',
      icon: 'https://api.iconify.design/akar-icons/github-fill.svg',
      value: 'github.com/JoJk0',
    },
    {
      name: 'website',
      icon: 'public',
      value: 'jojko.tech',
    },
  ],
  education: {
    title: 'Education',
    items: [
      {
        id: '1',
        institutionName: 'University of Liverpool',
        courseName: 'Computer Science (MEng)',
        degree: '2:1 Masters\' of Engineering',
        startDate: '2016-09-16T00:00:00',
        endDate: '2019-07-16T00:00:00',
        logoUrl: uolLogo,
      },
    ],
  },
  experience: {
    title: 'Experience',
    items: [
      {
        id: '1',
        name: 'Swoop Datacom',
        logoUrl: swoopLogo,
        position: 'Full Stack Developer',
        duties: [
          'Creating a Vue.js 3 web applications with Vue Composition API and Ionic and Vuetify UI components. Functionality includes Keycloak authentication, i18n, push notifications, TOTP 2FA and CRUD on database entities with Apollo Client with caching and local state management.',
          'Building a GraphQL API gateway on Node.js Apollo server that resolves database queries with a help of Prisma ORM connecting the server to the main MySQL database.',
        ],
        startDate: '2020-11-04T00:00:00',
        endDate: '2022-10-01T00:00:00',
      },
    ],
  },
  footer: '',
  languages: {
    title: 'i18n',
    items: ['English', 'Polish', 'Spanish'],
  },
  postScriptum: 'Additionally, I\'ve made many projects during school and university times, including the freelance ones.',
  projectsReferenceInfo: {
    label: 'For more projects visit my site',
    url: 'https://jojko.tech',
    urlLabel: 'jojko.tech',
  },
  skills: {
    title: 'Top skills',
    topSkills: [
      {
        name: 'Vue 3',
        logoUrl: 'https://api.iconify.design/logos/vue.svg',
      },
      {
        name: 'GraphQL',
        logoUrl: 'https://api.iconify.design/logos/graphql.svg',
      },
      {
        name: 'Node.js',
        logoUrl: 'https://api.iconify.design/logos/nodejs.svg',
      },
    ],
    otherSkills: [
      'TypeScript',
      'Apollo',
      'AWS Amplify',
      'Serverless',
      'Ionic',
      'Vuetify',
      'Google Firebase',
      'Prisma',
      'MySQL',
      'Docker',
      'Adobe Xd',
      'Photoshop',
      'Illustrator',
      'Substance 3D',
    ],
  },
} as const

export default defineEventHandler(() => cv)
