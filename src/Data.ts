import type { I18n } from './utils'
import { defineData } from './utils'

export interface JJKData {
  myNames: string[]
  socials: JJKSocial[]
  skillCategories: JJKSkillCategory[]
  skills: JJKSkill[]
}

export interface JJKSocial {
  name: string
  url: string
  urlName: string
}

export interface JJKSkill {
  name: SkillNames
  website: string
  categoryNames: SkillCategoryKeys[]
  relatedSkillNames?: SkillNames[]
  subskillNames?: SkillNames[]
  topSkillLogo?: string
  childOf?: SkillNames
}

export type JJKTopSkill = JJKSkill & {
  logoUrl: string
}

export interface JJKSkillCategory {
  name: I18n<string, SkillCategoryKeys>
  skillNames?: SkillNames[]
  relatedCategoryNames?: SkillCategoryKeys[]
}

export type SkillNames =
  | 'TypeScript'
  | 'JavaScript'
  | 'Vuex'
  | 'AJAX'
  | 'Angular'
  | 'Protractor'
  | 'HTML Canvas'
  | 'CSS3'
  | 'HTML5'
  | 'pixi.js'
  | 'Three.js'
  | 'SASS'
  | 'Git'
  | 'GitHub'
  | 'Vue.js'
  | 'Vue i18n'
  | 'Vue Router'
  | 'Vue Composition API'
  | 'GSAP'
  | 'ScrollTrigger'
  | 'Node.js'
  | 'PHP'
  | 'MySQL'
  | 'REST API'
  | 'Serverless'
  | 'AWS Amplify'
  | 'Vite'
  | 'Firebase'
  | 'Apollo Server'
  | 'GraphQL'
  | 'GraphQL Playground'
  | 'Express.js'
  | 'Jest'
  | 'JUnit'
  | 'Jasmine'
  | 'Illustrator'
  | 'Photoshop'
  | 'Adobe XD'
  | 'Substance 3D Stager'
  | 'Vectary'
  | 'JSON'
  | 'AWS S3'
  | 'PHPMyAdmin'
  | 'XML'
  | 'Prisma2 ORM'
  | 'Apollo Client'
  | 'Assembly'
  | 'C/C++'
  | 'Eclipse'
  | 'Java'
  | 'Python'
  | 'macOS'
  | 'Windows'
  | 'Ubuntu'

export type SkillCategoryKeys =
  | 'FRONTEND_DEVELOPMENT'
  | 'BACKEND_DEVELOPMENT'
  | 'DESIGN'
  | 'DEVELOPMENT_TOOLS'
  | 'SOFTWARE_TESTING'
  | 'DATABASES'
  | 'MULTI-PURPOSE_PROGRAMMING'
  | 'LANGUAGES'
  | 'IDE'
  | 'OPERATING_SYSTEMS_PROFICIENCY'

export default defineData<JJKData>({
  myNames: ['Jacob.', 'Jakub.', 'Kuba.', 'jojko.'],
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/JoJk0',
      urlName: 'jojk0',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jojko/',
      urlName: 'in/jojko',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/jojk0',
      urlName: 'jojk0',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jojk0/',
      urlName: 'jojk0',
    },
  ],
  skillCategories: [
    {
      name: {
        key: 'FRONTEND_DEVELOPMENT',
        en: 'Frontend development',
        pl: 'Frontend development',
        es: 'Frontend development',
      },
      relatedCategoryNames: ['BACKEND_DEVELOPMENT', 'DESIGN'],
    },
    {
      name: {
        key: 'BACKEND_DEVELOPMENT',
        en: 'Backend development',
        pl: 'Backend development',
        es: 'Backend development',
      },
      relatedCategoryNames: [
        'DATABASES',
        'MULTI-PURPOSE_PROGRAMMING',
        'OPERATING_SYSTEMS_PROFICIENCY',
        'SOFTWARE_TESTING',
        'FRONTEND_DEVELOPMENT',
      ],
    },
    {
      name: {
        key: 'DESIGN',
        en: 'Design',
        pl: 'Design',
        es: 'Diseño',
      },
      relatedCategoryNames: ['FRONTEND_DEVELOPMENT', 'IDE'],
    },
    {
      name: {
        key: 'IDE',
        en: 'IDE',
        pl: 'IDE',
        es: 'IDE',
      },
      relatedCategoryNames: [
        'DESIGN',
        'DATABASES',
        'MULTI-PURPOSE_PROGRAMMING',
        'DEVELOPMENT_TOOLS',
      ],
    },
    {
      name: {
        key: 'DEVELOPMENT_TOOLS',
        en: 'Development tools',
        pl: 'Narzędzia do programowania',
        es: 'Herramientas de desarrollo',
      },
      relatedCategoryNames: [
        'IDE',
        'FRONTEND_DEVELOPMENT',
        'BACKEND_DEVELOPMENT',
        'MULTI-PURPOSE_PROGRAMMING',
      ],
    },
    {
      name: {
        key: 'SOFTWARE_TESTING',
        en: 'Software testing',
        pl: 'Testowanie oprogramowania',
        es: 'Pruebas de software',
      },
      relatedCategoryNames: [
        'DEVELOPMENT_TOOLS',
        'BACKEND_DEVELOPMENT',
        'MULTI-PURPOSE_PROGRAMMING',
      ],
    },
    {
      name: {
        key: 'DATABASES',
        en: 'Databases',
        pl: 'Bazy danych',
        es: 'Bases de datos',
      },
      relatedCategoryNames: [
        'BACKEND_DEVELOPMENT',
        'MULTI-PURPOSE_PROGRAMMING',
        'SOFTWARE_TESTING',
      ],
    },
    {
      name: {
        key: 'MULTI-PURPOSE_PROGRAMMING',
        en: 'Multi-purpose programming',
        pl: 'Programowanie ogólne',
        es: 'Programación multífuncional',
      },
      relatedCategoryNames: [
        'BACKEND_DEVELOPMENT',
        'SOFTWARE_TESTING',
        'DATABASES',
      ],
    },

    {
      name: {
        key: 'LANGUAGES',
        en: 'Languages',
        pl: 'Języki',
        es: 'Lenguajes',
      },
      relatedCategoryNames: [
        'FRONTEND_DEVELOPMENT',
        'BACKEND_DEVELOPMENT',
        'MULTI-PURPOSE_PROGRAMMING',
      ],
    },
    {
      name: {
        key: 'OPERATING_SYSTEMS_PROFICIENCY',
        en: 'Operating systems proficiency',
        pl: 'Systemy operacyjne',
        es: 'Sistemas operativos',
      },
      relatedCategoryNames: [
        'BACKEND_DEVELOPMENT',
        'MULTI-PURPOSE_PROGRAMMING',
      ],
    },
  ],
  skills: [
    {
      name: 'Vue.js',
      website: 'https://www.vuejs.org',
      categoryNames: ['FRONTEND_DEVELOPMENT', 'DEVELOPMENT_TOOLS'],
      relatedSkillNames: ['Angular', 'JavaScript', 'Jest', 'Vite'],
      subskillNames: ['Vuex', 'Vue Composition API', 'Vue Router', 'Vue i18n'],
      topSkillLogo: './src/assets/logos/vuejs.svg',
    },
    {
      name: 'GraphQL',
      website: 'https://graphql.org',
      categoryNames: [
        'FRONTEND_DEVELOPMENT',
        'BACKEND_DEVELOPMENT',
        'DATABASES',
        'LANGUAGES',
      ],
      relatedSkillNames: [
        'AWS Amplify',
        'Apollo Server',
        'Apollo Client',
        'Firebase',
        'Prisma2 ORM',
      ],
      subskillNames: ['GraphQL Playground'],
      topSkillLogo: './src/assets/logos/graphql.svg',
    },
    {
      name: 'Node.js',
      website: 'https://nodejs.org',
      categoryNames: ['BACKEND_DEVELOPMENT', 'DEVELOPMENT_TOOLS'],
      relatedSkillNames: [
        'JavaScript',
        'TypeScript',
        'AWS Amplify',
        'Firebase',
        'Prisma2 ORM',
        'Apollo Server',
        'Express.js',
        'Serverless',
        'GraphQL',
      ],
      subskillNames: [],
      topSkillLogo: './src/assets/logos/nodejs.svg',
    },
    {
      name: 'TypeScript',
      website: 'https://www.typescriptlang.org',
      categoryNames: [
        'FRONTEND_DEVELOPMENT',
        'DEVELOPMENT_TOOLS',
        'LANGUAGES',
        'BACKEND_DEVELOPMENT',
      ],
      relatedSkillNames: [
        'JavaScript',
        'Node.js',
        'Vite',
        'Vue.js',
        'Vuex',
        'Vue Composition API',
        'Vue Router',
        'Vue i18n',
      ],
    },
    {
      name: 'JavaScript',
      website: 'https://www.javascript.com',
      categoryNames: ['FRONTEND_DEVELOPMENT'],
      relatedSkillNames: [
        'TypeScript',
        'Node.js',
        'Vite',
        'Vue.js',
        'Vuex',
        'Vue Composition API',
        'Vue Router',
        'Vue i18n',
      ],
    },
    {
      name: 'Jest',
      website: 'https://jestjs.io',
      categoryNames: ['SOFTWARE_TESTING'],
      relatedSkillNames: ['JavaScript', 'Node.js', 'Vue.js'],
    },
    {
      name: 'Vite',
      website: 'https://vite.io',
      categoryNames: ['FRONTEND_DEVELOPMENT', 'DEVELOPMENT_TOOLS'],
      relatedSkillNames: ['JavaScript', 'Node.js', 'Vue.js', 'TypeScript'],
    },
    {
      name: 'Vuex',
      website: 'https://vuex.vuejs.org',
      categoryNames: ['FRONTEND_DEVELOPMENT', 'DEVELOPMENT_TOOLS', 'DATABASES'],
      relatedSkillNames: [
        'JavaScript',
        'TypeScript',
        'Vue Composition API',
        'Vue Router',
        'Vue i18n',
      ],
      childOf: 'Vue.js',
    },
    {
      name: 'Vue Composition API',
      website: 'https://v3.vuejs.org/guide/composition-api-introduction.html',
      categoryNames: ['FRONTEND_DEVELOPMENT', 'DEVELOPMENT_TOOLS'],
      relatedSkillNames: [
        'JavaScript',
        'TypeScript',
        'Vue Router',
        'Vue i18n',
        'Vuex',
      ],
      childOf: 'Vue.js',
    },
    {
      name: 'Vue Router',
      website: 'https://router.vuejs.org/',
      categoryNames: ['FRONTEND_DEVELOPMENT', 'DEVELOPMENT_TOOLS'],
      relatedSkillNames: [
        'JavaScript',
        'TypeScript',
        'Vue Composition API',
        'Vue i18n',
        'Vuex',
      ],
      childOf: 'Vue.js',
    },
    {
      name: 'Vue i18n',
      website: 'https://vue-i18n.intlify.dev/',
      categoryNames: ['FRONTEND_DEVELOPMENT', 'DEVELOPMENT_TOOLS'],
      relatedSkillNames: [
        'JavaScript',
        'TypeScript',
        'Vue Composition API',
        'Vue Router',
        'Vuex',
      ],
      childOf: 'Vue.js',
    },
    {
      name: 'Apollo Server',
      website: 'https://www.apollographql.com/docs/apollo-server/',
      categoryNames: ['BACKEND_DEVELOPMENT', 'DEVELOPMENT_TOOLS'],
      relatedSkillNames: [
        'JavaScript',
        'Node.js',
        'TypeScript',
        'GraphQL',
        'Prisma2 ORM',
        'Apollo Client',
      ],
    },
    {
      name: 'Apollo Client',
      website: 'https://www.apollographql.com/docs/react/',
      categoryNames: ['FRONTEND_DEVELOPMENT', 'DEVELOPMENT_TOOLS'],
      relatedSkillNames: [
        'JavaScript',
        'TypeScript',
        'GraphQL',
        'Apollo Server',
      ],
    },
    {
      name: 'AWS Amplify',
      website: 'https://aws.amazon.com/amplify/',
      categoryNames: ['BACKEND_DEVELOPMENT'],
      relatedSkillNames: [
        'JavaScript',
        'Node.js',
        'TypeScript',
        'GraphQL',
        'Prisma2 ORM',
        'AWS S3',
      ],
    },
    {
      name: 'Firebase',
      website: 'https://firebase.google.com/',
      categoryNames: ['BACKEND_DEVELOPMENT'],
      relatedSkillNames: [
        'JavaScript',
        'Node.js',
        'TypeScript',
        'GraphQL',
        'Prisma2 ORM',
        'AWS Amplify',
      ],
    },
    {
      name: 'Prisma2 ORM',
      website: 'https://www.prisma.io/',
      categoryNames: ['BACKEND_DEVELOPMENT', 'DATABASES', 'DEVELOPMENT_TOOLS'],
      relatedSkillNames: ['JavaScript', 'Node.js', 'TypeScript', 'GraphQL'],
    },
    {
      name: 'Serverless',
      website: 'https://serverless.com/',
      categoryNames: ['BACKEND_DEVELOPMENT'],
      relatedSkillNames: [
        'JavaScript',
        'Node.js',
        'TypeScript',
        'GraphQL',
        'AWS Amplify',
        'Firebase',
      ],
    },
    {
      name: 'GraphQL Playground',
      website: 'https://graphql.org/playground/',
      categoryNames: ['BACKEND_DEVELOPMENT'],
      relatedSkillNames: ['JavaScript', 'Node.js', 'TypeScript', 'GraphQL'],
      childOf: 'GraphQL',
    },
    {
      name: 'HTML Canvas',

      website: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
      categoryNames: ['FRONTEND_DEVELOPMENT'],
      relatedSkillNames: [
        'JavaScript',
        'Vue.js',
        'CSS3',
        'pixi.js',
        'Three.js',
      ],
      childOf: 'HTML5',
    },
    {
      name: 'HTML5',
      website: 'https://developer.mozilla.org/en-US/docs/Web//HTML',
      categoryNames: ['FRONTEND_DEVELOPMENT'],
      relatedSkillNames: ['JavaScript', 'Vue.js', 'CSS3', 'SASS'],
      subskillNames: ['HTML Canvas'],
    },
    {
      name: 'CSS3',
      website: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      categoryNames: ['FRONTEND_DEVELOPMENT'],
      relatedSkillNames: ['JavaScript', 'Vue.js', 'HTML5', 'SASS'],
    },
    {
      name: 'SASS',
      website: 'https://sass-lang.com/',
      categoryNames: ['FRONTEND_DEVELOPMENT'],
      relatedSkillNames: ['JavaScript', 'Vue.js', 'CSS3', 'HTML5'],
    },
    {
      name: 'pixi.js',
      website: 'https://pixijs.com/',
      categoryNames: ['FRONTEND_DEVELOPMENT'],
      relatedSkillNames: [
        'JavaScript',
        'Vue.js',
        'HTML Canvas',
        'Three.js',
        'Substance 3D Stager',
      ],
    },
    {
      name: 'Three.js',
      website: 'https://threejs.org/',
      categoryNames: ['FRONTEND_DEVELOPMENT'],
      relatedSkillNames: [
        'JavaScript',
        'Vue.js',
        'HTML Canvas',
        'pixi.js',
        'Substance 3D Stager',
      ],
    },
    {
      name: 'Substance 3D Stager',
      website: 'https://www.substance3d.com/',
      categoryNames: ['DESIGN', 'IDE'],
      relatedSkillNames: [
        'Photoshop',
        'Illustrator',
        'pixi.js',
        'Three.js',
        'Adobe XD',
      ],
    },
    {
      name: 'Adobe XD',
      website: 'https://www.adobe.com/products/xd.html',
      categoryNames: ['DESIGN', 'IDE'],
      relatedSkillNames: [
        'Photoshop',
        'Illustrator',
        'pixi.js',
        'Substance 3D Stager',
        'CSS3',
      ],
    },
    {
      name: 'Photoshop',
      website: 'https://www.adobe.com/products/photoshop.html',
      categoryNames: ['DESIGN', 'IDE'],
      relatedSkillNames: [
        'Adobe XD',
        'Illustrator',
        'pixi.js',
        'Substance 3D Stager',
      ],
    },
    {
      name: 'Illustrator',
      website: 'https://www.adobe.com/products/illustrator.html',
      categoryNames: ['DESIGN', 'IDE'],
      relatedSkillNames: [
        'Adobe XD',
        'Photoshop',
        'pixi.js',
        'Substance 3D Stager',
      ],
    },
    {
      name: 'Angular',
      website: 'https://angular.io/',
      categoryNames: ['FRONTEND_DEVELOPMENT', 'DEVELOPMENT_TOOLS'],
      relatedSkillNames: [
        'JavaScript',
        'Vue.js',
        'HTML Canvas',
        'pixi.js',
        'Three.js',
        'Substance 3D Stager',
        'CSS3',
        'SASS',
      ],
      subskillNames: ['Protractor'],
    },
    {
      name: 'Protractor',
      website: 'https://www.protractortest.org/',
      categoryNames: ['FRONTEND_DEVELOPMENT', 'SOFTWARE_TESTING'],
      relatedSkillNames: ['JavaScript', 'Vue.js', 'Jest', 'Jasmine'],
      childOf: 'Angular',
    },
    {
      name: 'Jest',
      website: 'https://jestjs.io/',
      categoryNames: ['FRONTEND_DEVELOPMENT', 'SOFTWARE_TESTING'],
      relatedSkillNames: ['JavaScript', 'Vue.js', 'Jasmine'],
    },
    {
      name: 'Jasmine',
      website: 'https://jasmine.github.io/',
      categoryNames: ['FRONTEND_DEVELOPMENT', 'SOFTWARE_TESTING'],
      relatedSkillNames: ['JavaScript', 'Vue.js', 'Jest'],
    },
  ],
})
