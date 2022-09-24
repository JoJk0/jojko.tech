import type { I18NString } from './modules/i18n'
import type { I18n } from './utils'
import { defineData } from './utils'
import swoopLogo from '~/assets/logos/swoop.svg'
import uolLogo from '~/assets/logos/uol.svg'

export interface JJKData {
  myNames: string[]
  socials: JJKSocial[]
  skillCategories: JJKSkillCategory[]
  skills: JJKSkill[]
  topics: JJKTopic[]
  projects: JJKProject[]
  cv: CVData
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

export interface JJKTopic {
  id: string
  name: I18NString
  draftText: I18NString
  sentText: I18NString
}

export interface JJKProject {
  id: string
  title: string
  date: string
  coAuthors: string[]
  description: I18NString
  typography: {
    name: string
    displayName: string
  }[]
  colourPalette: {
    code: `#${string}`
    name: string
  }[]
  colours: unknown
  topKeywords: {
    name: string
    label: string
    url: string
    icon: string
  }[]
  keywords: string[]
  urls: {
    live: string
    copy: string
    dribbble: string
    report: string
    github: string
  }
}

export interface CVData {
  headline: {
    name: string
    pronouns: string
    subtitle: string
  }
  contact: {
    name: string
    icon: string
    value: string
  }[]
  aboutMe: {
    title: string
    content: string
  }
  experience: {
    title: string
    items: ExperienceWorkEntry[]
  }
  education: {
    title: string
    items: EducationEntry[]
  }
  skills: {
    title: string
    topSkills: {
      logoUrl: string
      name: string
    }[]
    otherSkills: string[]
  }
  languages: {
    title: string
    items: string[]
  }
  postScriptum: string
  projectsReferenceInfo: {
    label: string
    url: string
    urlLabel: string
  }
  footer: string
}

export interface ExperienceWorkEntry {
  id: string
  name: string
  logoUrl: string
  position: string
  startDate: string
  endDate: string
  duties: string[]
}

export interface EducationEntry {
  id: string
  institutionName: string
  courseName: string
  degree: string
  logoUrl: string
  startDate: string
  endDate: string
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

export default defineData({
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
  projects: [
    {
      id: '1',
      title: 'JJK Portfolio 6.1',
      date: '1376784000000',
      coAuthors: [],
      description: {
        en: 'Sixth version of my portfolio. Created as a single-page website.',
        pl: '//TODO',
        es: '//TODO',
      },
      typography: [
        {
          name: 'oswald',
          displayName: 'Oswald',
        },
        {
          name: 'roboto',
          displayName: 'Roboto',
        },
      ],
      colourPalette: [
        {
          code: '#03679f',
          name: 'Prime Blue',
        },
        {
          code: '#00a2ff',
          name: 'Protoss Pylon',
        },
        {
          code: '#FAFAFA',
          name: 'Dr. White',
        },
        {
          code: '#CCCCCC',
          name: 'Cerebral Grey',
        },
      ],
      colours: {
        background: '#03679f',
        panelBg: '#FAFAFA',
        text: '#000000',
        topTitleLeft: '#00a2ff',
        topTitleRight: '#03679f',
        buttons: '#00a2ff',
      },
      topKeywords: [
        {
          name: 'html5',
          label: 'HTML5',
          url: '',
          icon: '',
        },
      ],
      keywords: [
        'HTML5',
        'CSS3',
        'JQuery',
        'LESS',
        'JavaScript',
        'Photoshop',
      ],
      urls: {
        live: '',
        copy: 'http://uol-walking-tour-backend.000webhostapp.com/projects/jjk-v6.1/',
        dribbble: '',
        report: '',
        github: 'https://github.com/JoJk0/jjk-portfolio-v6.1',
      },
    },
  ],
  topics: [
    {
      id: 'COFFEE',
      name: {
        en: '❤️ coffee',
        pl: '❤️ kawie',
        es: '❤️ café',
      },
      draftText: {
        en: 'Did you know Guatemala is my favourite coffee region?...',
        pl: 'Czy wiesz, że Guatemala jest moim ulubionym regionem kawy?...',
        es: '¿Sabías que Guatemala es mi región favorita del café?...',
      },
      sentText: {
        en: 'You\'re a boss! Thanks for your interest about me. \nI would love to talk to you or meet for a coffee ❤️.',
        pl: 'Pjona 👊! Dzięki za zainteresowanie się mną. \nChętnie z Tobą porozmawiam lub spotkam się na kawę ❤️.',
        es: '¡Eres maravillosx! Gracias por su interés acerca de mí. Me encantaría hablar contigo o quedar para tomar un café ❤️.',
      },
    },
    {
      id: 'HIRING_ME',
      name: {
        en: '👔 hiring me',
        pl: '👔 zatrudnieniu mnie',
        es: '👔 contratación de mí',
      },
      draftText: {
        en: 'By hiring me you will get a young and talented team member ...',
        pl: 'Zatrudniając mnie zyskasz młodego i utalentowanego członka zespołu...',
        es: 'Al contratarme obtendrás un miembro de equipo joven y talentoso...',
      },
      sentText: {
        en: 'You\'re a boss! Thanks for choosing me as a potential candidate. \nI would love to speak to you soon.',
        pl: 'Pjona 👊! Dzięki za wybór mnie jako potencjalnego kandydata. \nChętnie wkrótce z Tobą porozmawiam.',
        es: '¡Eres maravillosx! Gracias por elegirme como candidato potencial. Me encantaría hablar contigo pronto.',
      },
    },
    {
      id: 'COOPERATION',
      name: {
        en: '🤝 cooperation',
        pl: '🤝 współpracy',
        es: '🤝 cooperación',
      },
      draftText: {
        en: 'I\'m more than happy to co-work on projects ...',
        pl: 'Bardzo się cieszę ze współpracy przy projektach...',
        es: 'Estoy más que feliz de colaborar en los proyectos...',
      },
      sentText: {
        en: 'Nice to meet you! I will write to you soon.',
        pl: 'Miło Cię poznać! Wkrótce napiszę do Ciebie.',
        es: '¡Me encantaría hablar contigo pronto!',
      },
    },
    {
      id: 'FREELANCE_PROJECTS',
      name: {
        en: '📑 freelance projects',
        pl: '📑 projektach',
        es: '📑 proyectos',
      },
      draftText: {
        en: 'Did you know I\'ve started freelancing in 2011? ...',
        pl: 'Czy wiesz, że rozpocząłem freelancing w 2011?...',
        es: '¿Sabías que empecé a trabajar como freelancer en 2011?...',
      },
      sentText: {
        en: 'You\'re a boss! Thanks for asking about freelancing. \nI will send you a reply soon.',
        pl: 'Pjona 👊! Dzięki za zapytanie o freelancing. \nWkrótce się do Ciebie odezwę.',
        es: '¡Eres maravillosx! Gracias por preguntar sobre freelance. \nEnvíate un mensaje pronto.',
      },
    },
    {
      id: 'BUGS',
      name: {
        en: '🐞 bugs',
        pl: '🐞 bugach',
        es: '🐞 errores',
      },
      draftText: {
        en: 'This site is still in early development stages ...',
        pl: 'Ta strona jest jeszcze w fazie rozwoju...',
        es: 'Este sitio todavía está en fase de desarrollo...',
      },
      sentText: {
        en: 'You\'re a star! Cheers 🍻 for reporting a bug. \nI will have a look at it and will reply soon.',
        pl: 'Pjona 👊! Dzięki za zgłoszenie błędu. \nSprawdzę go i odpowiem wkrótce.',
        es: '¡Eres la leche! ¡Felicidades 🍻 por reportar un error. \nLe echaré un vistazo y te responderé pronto.',
      },
    },
    {
      id: 'SOCIAL_MEDIA',
      name: {
        en: '👩‍💻 social media',
        pl: '👩‍💻 mediach społecznościowych',
        es: '👩‍💻 medios sociales',
      },
      draftText: {
        en: 'My Facebook site has been created in 2011 and closed in 2022 due to Meta boycott ...',
        pl: 'Prowadziłem fanpage na Facebooku od 2011 do 2022 kiedy to zbojkotowałem Meta ...',
        es: 'Mi sitio de Facebook se creó en 2011 y se cerró en 2022 debido al boicot a Meta...',
      },
      sentText: {
        en: 'All done! Thanks for asking about social media. \nI will send you a reply soon.',
        pl: 'To tyle! Dzięki za zapytanie o mediach społecznościowych. \nWkrótce się do Ciebie odezwę.',
        es: '¡Todo listo! Gracias por preguntar sobre medios sociales. \nEnvíate un mensaje pronto.',
      },
    },
  ],
  cv: {
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
        'TypeScript', 'Apollo', 'AWS Amplify', 'Serverless', 'Ionic', 'Vuetify', 'Google Firebase', 'Prisma', 'MySQL', 'Docker', 'Adobe Xd', 'Photoshop', 'Illustrator', 'Substance 3D',
      ],
    },
  },
} as const)
