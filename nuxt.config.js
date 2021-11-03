export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Escobedo Lucea BTE Lab',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Escobedo Lucea BTE Lab is a research department from Fundation HGU Hospital General Universitario, specialize in biomaterials and regenerative tissue.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // nuxt svg loader
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Disable a plugin by passing false as value
    // 'postcss-url': false,
    'postcss-nested': {},
    'postcss-responsive-type': {},
    'postcss-hexrgba': {}
  },

  router: {
    base: '/'
  }, 

  watch: ['~/assets/fonts/*.ttf', '~/assets/*.*', '~/components/*.vue', '~/pages/*.vue' ],

  svg: {
    vueSvgLoader: {
      // vue-svg-loader options
    },
    svgSpriteLoader: {
      // svg-sprite-loader options
    }
  }
}
