const appVersion = require("./package.json").version;
const buildTime = new Date().getTime();
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Wairld - World of AI',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Живая лаборатория для симбиотической эволюции человеческого и искусственного интеллекта. Создавайте, обучайте и развивайте ваших AI-агентов (NFI) в персистентном 3D-мире на Unreal Engine 5.' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/fonts.css',
    '~/assets/css/icons.css',

    '~/assets/styles/style',
    '~/assets/styles/modern-theme',
    '~/assets/styles/media',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/Components.js',
    '~/plugins/Mixins.js',
    '~/plugins/ElementUi.js',
    '~/plugins/axios.js',
    '~/plugins/requests.js',
    '~/plugins/storage.js',
    '~/plugins/Filters.js',
    '~/plugins/entities.js',
    { src: '~plugins/VueDragscroll', ssr: false},
    { src: '~plugins/Directives.js', ssr: false },
    { src: '~plugins/VueCarousel.js', ssr: false },
    { src: '~plugins/PanelSnap.js', ssr: false },
    { src: '~plugins/Amcharts.js', ssr: false },
    { src: '~plugins/ElSelectTree.js', ssr: false },
    { src: '~plugins/VueModelViewer.js', ssr: false },
    { src: '~plugins/MarmosetViewer.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    "vue2-editor/nuxt",
    ["@openafg/nuxt-fullpage", {
      activeSection: 1
        // Options
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: 'Wairld - World of AI',
      short_name: 'Wairld'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    filenames: {
      app: ({ isDev, isModern }) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `[contenthash:9]${isModern ? '.modern' : ''}.${buildTime}.${appVersion}.js`,
      chunk: ({ isDev, isModern }) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `[contenthash:9]${isModern ? '.modern' : ''}.${buildTime}.${appVersion}.js`,
      css: ({ isDev }) => isDev ? '[name].css' : `css/[contenthash:9].${buildTime}.${appVersion}.css`,
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : `img/[name].[contenthash:9].[ext]`,
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : `fonts/[name].[contenthash:9].[ext]`,
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : `videos/[name].[contenthash:9].[ext]`
    },
  },

  cache: false,
  // loading: '~/components/loaders/Index.vue',
  server: {
    port: process.env.VUE_APP_PORT // default: 3000
  }
}
