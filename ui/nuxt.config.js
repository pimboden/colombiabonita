import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - colombia-bonita',
    title: 'colombia-bonita',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/assets/icons/favicon-32x32.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/colombia-bonita.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/api.ts' },{ src: '~/plugins/axios.ts' }, {src: '~/plugins/splide.client.js', ssr:false}],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://composition-api.nuxtjs.org/getting-started/setup
    '@nuxtjs/composition-api/module',// https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', { filename: '.env.dev' }],
    // https://github.com/nuxt-community/date-fns-module#readme
    // Doc: https://date-fns.org/docs/Getting-Started
    '@nuxtjs/date-fns',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg'
  ],
  dateFns: {
    locales: ['es', 'de', 'enUS'],
    defaultLocale: 'es'
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],
  i18n: {
    strategy: 'prefix',
    locales: [
      {
        code: 'es',
        name: 'Spanish',
        iso: 'es-CO',
        file: 'es.js'
      },
      {
        code: 'de',
        name: 'German',
        iso: 'de-CH',
        file: 'de.js'
      },
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en.js'
      }
    ],
    defaultLocale: 'es',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: process.env.npm_package_name + '_language'
    },
    lazy:false,
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'es'
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.REST_API_URL,
    credentials: true
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  router: {
    extendRoutes(nuxtRoutes, _resolve) {
      const util = require('util')
      console.log('routes debug', util.inspect(nuxtRoutes, false, null, true /* enable colors */))
    }
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/styles/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

