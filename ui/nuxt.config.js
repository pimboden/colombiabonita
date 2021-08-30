import colors from 'vuetify/es5/util/colors'
import * as path from 'path'
const debugYellow = '\x1B[33m%s\x1B[0m'
const debugHeader = '\x1B[32m%s\x1B[0m'

console.log('')
console.log(debugYellow, '============================================')
console.log(debugYellow, '====== start building nuxt.config.js  ======')
console.log(debugYellow, '============================================')
// let's get filename with path separate because nuxt:dotenv config needs only the filename part
const envFilename = `.env.${process.env.NODE_ENV}`
const envPath = path.resolve(process.cwd(), envFilename)

require('dotenv').config({ path: envPath })

const debugOutput = [
  { name: 'HOST_NAME', value: process.env.HOST_NAME },
  { name: 'REST_API_URL', value: process.env.REST_API_URL },
  { name: 'GMAPS_API_KEY', value: process.env.GMAPS_API_KEY },
  { name: 'SHOW_DEBUG_INFO', value: process.env.SHOW_DEBUG_INFO === 'true' },
  { name: 'ENV PATH', value: envPath }
]
console.log(debugHeader, '\nenv variables & configurations:')
console.table(debugOutput)

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  env: {
    HOST_NAME: process.env.HOST_NAME,
    REST_API_URL: process.env.REST_API_URL,
    GMAPS_API_KEY: process.env.GMAPS_API_KEY,
    EMAILJS_SERVICE_ID:process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID:process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_UID:process.env.EMAILJS_UID,
    EMAILJS_API_SEND:process.env.EMAILJS_API_SEND,
    SHOW_DEBUG_INFO: process.env.SHOW_DEBUG_INFO
  },
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
      { hid: 'google-site-verification', name: 'google-site-verification', content: 'O4XLIRPqbSOzBL6zKy0Z7dJkCBiLUnD2spLgW7g-uKY' },
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
    ['@nuxtjs/vuetify',{treeShake: true}],
    // https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', { filename: '.env.dev' }],
    // https://github.com/nuxt-community/date-fns-module#readme
    // Doc: https://date-fns.org/docs/Getting-Started
    '@nuxtjs/date-fns',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg'
  ],
  recaptcha: {
    siteKey: process.env.RECAPTCHA_SITE_KEY,
    version: 3
  },
  dateFns: {
    locales: ['es', 'de', 'enUS'],
    defaultLocale: 'es'
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/recaptcha',
    '@nuxtjs/i18n',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    ['nuxt-gmaps', {
      key: process.env.GMAPS_API_KEY
    }
    ]
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
    analyze:true,
    extractCSS: true,
    "html.minify":{
      collapseBooleanAttributes: true,
      decodeEntities: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      trimCustomFragments: true,
      useShortDoctype: true
    },
    transpile: [
      "vee-validate/dist/rules"
    ]    
  }
}

