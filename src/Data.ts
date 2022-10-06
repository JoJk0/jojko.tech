import type { I18NString } from './modules/i18n'
import { defineData } from './utils'
import swoopLogo from '~/assets/logos/swoop.svg'
import uolLogo from '~/assets/logos/uol.svg'

export interface JJKData {
  myNames: string[]
  socials: JJKSocial[]
  topSkills: [JJKSkill, JJKSkill, JJKSkill]
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
  name: string
  icon: string
  inverted?: boolean
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
  // colours: unknown
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
  skills: [
    {
      name: 'TypeScript',
      icon: 'logos/typescript-icon',
    },
    {
      name: 'Google Firebase',
      icon: 'logos/firebase',
    },
    {
      name: 'Ionic',
      icon: 'logos/ionic-icon',
    },
    {
      name: 'Vuetify',
      icon: 'logos/vuetifyjs',
    },
    {
      name: 'AWS Amplify',
      icon: 'logos/aws-amplify',
    },
    {
      name: 'Prisma',
      icon: 'logos/prisma',
      inverted: true,
    },
    {
      name: 'Apollo',
      icon: 'logos/apollostack',
      inverted: true,
    },
    {
      name: 'Docker',
      icon: 'logos/docker-icon',
    },
    {
      name: 'Keycloak',
      icon: 'https://www.keycloak.org/resources/images/keycloak_icon_512px.svg',
    },
    {
      name: 'Vite',
      icon: 'logos/vitejs',
    },
    {
      name: 'MySQL',
      icon: 'logos/mysql-icon',
      inverted: true,
    },
    {
      name: 'Adobe Xd',
      icon: 'logos/adobe-xd',
    },
    {
      name: 'Adobe Photoshop',
      icon: 'logos/adobe-photoshop',
    },
    {
      name: 'Adobe Illustrator',
      icon: 'logos/adobe-illustrator',
    },
    {
      name: 'Adobe Substance 3D Stager',
      icon: 'https://www.adobe.com/content/dam/cc/icons/sg_appicon_256.svg',
    },
    {
      name: 'AWS',
      icon: 'logos/aws',
      inverted: true,
    },
    {
      name: 'Angular',
      icon: 'logos/angular-icon',
    },
    {
      name: 'Google Cloud',
      icon: 'logos/google-cloud',
    },
    {
      name: 'JetBrains YouTrack',
      icon: 'logos/youtrack',
    },
    {
      name: 'Three.js',
      icon: 'logos/threejs',
      inverted: true,
    },
    {
      name: 'JavaScript',
      icon: 'logos/javascript',
    },
    {
      name: 'VueUse',
      icon: 'logos/vueuse',
    },
    {
      name: 'Pinia / VueX',
      icon: 'https://pinia.vuejs.org/logo.svg',
    },
    {
      name: 'Vue 3',
      icon: 'logos/vue',
    },
    {
      name: 'Node.js',
      icon: 'logos/nodejs-icon',
    },
    {
      name: 'GraphQL',
      icon: 'logos/graphql',
    },
    {
      name: 'HTML5',
      icon: 'vscode-icons/file-type-html',
    },
    {
      name: 'CSS3',
      icon: 'vscode-icons/file-type-css',
    },
    {
      name: 'PixiJS',
      icon: 'logos/pixijs',
    },
    {
      name: 'SASS',
      icon: 'logos/sass',
    },
    {
      name: 'Git',
      icon: 'logos/git-icon',
    },
    {
      name: 'Vue i18n',
      icon: 'https://vue-i18n.intlify.dev/vue-i18n-logo.svg',
    },
    {
      name: 'GSAP',
      icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg',
    },
    {
      name: 'PHP',
      icon: 'logos/php',
    },
    {
      name: 'Serverless',
      icon: 'logos/serverless',
    },
    {
      name: 'Vitest',
      icon: 'logos/vitest',
    },
    {
      name: 'Jest',
      icon: 'logos/jest',
    },
    {
      name: 'Vectary',
      icon: 'https://www.vectary.com/images/Logo_1.dc7000.svg',
    },
    {
      name: 'Material 3 (MD3)',
      icon: 'cib/material-design',
      inverted: true,
    },
    {
      name: 'Puppeteer',
      icon: 'logos/puppeteer',
    },
    {
      name: 'AWS S3',
      icon: 'logos/aws-s3',
    },
    {
      name: 'AWS Cognito',
      icon: 'logos/aws-cognito',
    },
    {
      name: 'AWS Lambda',
      icon: 'logos/aws-lambda',
    },
    {
      name: 'AWS API Gateway',
      icon: 'logos/aws-api-gateway',
    },
    {
      name: 'Webpack',
      icon: 'logos/webpack',
    },
    {
      name: 'ESLint',
      icon: 'logos/eslint',
    },
    {
      name: 'GitHub',
      icon: 'logos/github-icon',
      inverted: true,
    },
    {
      name: 'GitHub Actions',
      icon: 'logos/github-actions',
      inverted: true,
    },
    {
      name: 'AWS SES',
      icon: 'logos/aws-ses',
    },
    {
      name: 'macOS',
      icon: 'logos/apple',
      inverted: true,
    },
    {
      name: 'Ubuntu',
      icon: 'logos/ubuntu',
      inverted: true,
    },
    {
      name: 'Windows',
      icon: 'logos/microsoft-windows',
    },
    {
      name: 'PNPM',
      icon: 'vscode-icons/file-type-pnpm',
    },
    {
      name: 'Python',
      icon: 'logos/python',
    },
    {
      name: 'Eclipse',
      icon: 'logos/eclipse-icon',
    },
    {
      name: 'Java',
      icon: 'logos/java',
    },
    {
      name: 'C / C++',
      icon: 'vscode-icons/file-type-cpp',
      inverted: true,
    },
  ],
  wishList: [
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
  ],
  topSkills: [
    {
      name: 'Vue 3',
      icon: 'logos/vue',
    },
    {
      name: 'GraphQL',
      icon: 'logos/graphql',
    },
    {
      name: 'Node.js',
      icon: 'logos/nodejs-icon',
    },
  ],
  projects: [
    {
      id: '11',
      title: 'jojko.tech',
      date: '2022-10-08T12:00:00.000Z',
      coAuthors: [],
      description: {
        en: 'This is the latest version of my personal site. It\s an update of the previous version. Rewritten from scratch with the latest tech stack. It has been significantly simplified and has SPA experience with linear flow.',
        pl: 'Najnowsza wersja mojego portfolio. Subtelna aktualizacja stylu poprzedniej wersji, napisana od nowa z użyciem najnowszych technologii. Strona została uproszczona i UX jest linearne.',
        es: 'La versión mas nueva de mi portfolio. Una actualización sutil del estilo de la versión anterior. Escrito del nuevo con las tecnologías más nuevas',
      },
      typography: [
        {
          name: 'quicksand',
          displayName: 'Quicksand',
        },
      ],
      colourPalette: [
        {
          code: '#001427',
          name: 'Kuretake black manga',
        },
        {
          code: '#797ef7',
          name: 'Orchid',
        },
        {
          code: '#00ffce',
          name: 'Bright teal',
        },
        {
          code: '#c4fffe',
          name: 'Vic 20 blue',
        },
      ],
      topKeywords: [
        {
          name: 'vue',
          label: 'Vue 3',
          url: 'https://vuejs.org',
          icon: 'logos/vue',
        },
        {
          name: 'firebase',
          label: 'Google Firebase',
          url: 'https://firebase.com',
          icon: 'logos/firebase',
        },
        {
          name: 'vite',
          label: 'Vite',
          url: 'https://vitejs.dev',
          icon: 'logos/vitejs',
        },
      ],
      keywords: [
        'TypeScript',
        'GSAP',
        'Three.js',
        'Vuetify',
        'SASS',
      ],
      urls: {
        live: '',
        copy: '',
        report: '',
        github: 'https://github.com/JoJk0/jojko.tech',
        dribbble: '',
      },
    },
    {
      id: '10',
      title: 'Swoop Datacom',
      date: '2022-02-28T00:00:00Z',
      coAuthors: [],
      description: {
        en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod bibendum leo in malesuada. Praesent interdum, turpis eu scelerisque dictum, enim ipsum mollis libero, id finibus felis risus laoreet felis.',
        pl: '//TODO',
        es: '//TODO',
      },
      typography: [
        {
          name: 'work-sans',
          displayName: 'Work Sans',
        },
      ],
      colourPalette: [
        {
          code: '#273140',
          name: 'Blue-black',
        },
        {
          code: '#3BAEDF',
          name: 'Highlighter Blue',
        },
        {
          code: '#FD968A',
          name: 'Mona Lisa',
        },
        {
          code: '#E9F9FF',
          name: 'Clear Skies',
        },
      ],
      // colours: {
      //   background: '#03679f',
      //   panelBg: '#FAFAFA',
      //   text: '#000000',
      //   topTitleLeft: '#00a2ff',
      //   topTitleRight: '#03679f',
      //   buttons: '#00a2ff',
      // },
      topKeywords: [
        {
          name: 'vue',
          label: 'Vue 3',
          url: 'https://vuejs.org',
          icon: 'logos/vue',
        },
        {
          name: 'amplify',
          label: 'AWS Amplify',
          url: 'https://amplify.aws.com',
          icon: 'logos/aws-amplify',
        },
        {
          name: 'vuetify',
          label: 'Vuetify',
          url: 'https://vuetifyjs.com',
          icon: 'logos/vuetifyjs',
        },
      ],
      keywords: [
        'Github Actions', 'GSAP', 'Adobe Substance 3D Stager', 'three.js', 'Vite',
      ],
      urls: {
        live: 'https://swoopdata.com/',
        copy: '',
        dribbble: '',
        report: '',
        github: '',
      },
    },
    {
      id: '0',
      title: 'jojko.tech 8.0',
      date: '2020-08-17T18:27:52.000Z',
      coAuthors: [],
      description: {
        en: 'This is my previous version of my site. I gained loads of new skills while working on this project (like Angular, TypeScript, Node.js). I spent months during the COVID-19 lockdown learning new tools, designing, implementing and deploying the website.',
        pl: 'Poprzednia wersja mojej strony. Zdobyłem wiele nowych umiejętności podczas pracy nad tym projektem. Spędziłem covidowy lockdown nad nim, ucząc się nowych narzędzi, projektowania, implementacji i wdrażania projektu.',
        es: 'Versión anterior de mi sitio web. Adquirí muchas habilidades nuevas durante el trabajo en este proyecto. Pasé meses durante el bloqueo de COVID-19 trabajando en ello y aprendí nuevas herramientas.',
      },
      typography: [
        {
          name: 'quicksand',
          displayName: 'Quicksand',
        },
      ],
      colourPalette: [
        {
          code: '#001427',
          name: 'Kuretake black manga',
        },
        {
          code: '#797ef7',
          name: 'Orchid',
        },
        {
          code: '#00ffce',
          name: 'Bright teal',
        },
        {
          code: '#c4fffe',
          name: 'Vic 20 blue',
        },
      ],
      topKeywords: [
        {
          name: 'angular',
          label: 'Angular',
          url: 'https://angular.io',
          icon: 'logos/angular-icon',
        },
        {
          name: 'firebase',
          label: 'Google Firebase',
          url: 'https://firebase.com',
          icon: 'logos/firebase',
        },
        {
          name: 'nodejs',
          label: 'Node.js',
          url: 'https://nodejs.org',
          icon: 'logos/nodejs-icon',
        },
      ],
      keywords: [
        'Angular',
        'Node.js',
        'GSAP',
        'Google Firebase',
        'TypeScript',
      ],
      urls: {
        live: '',
        copy: '',
        report: '',
        github: 'https://github.com/JoJk0/jjk-portfolio',
        dribbble: '',
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
