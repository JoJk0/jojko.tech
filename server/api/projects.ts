const projects = [
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
] as const

export default defineEventHandler(() => projects)
