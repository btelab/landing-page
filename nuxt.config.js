require('dotenv').config()

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
    '~/assets/css/main.css',
  ],

  env: {
    instagramAccessToken: process.env.INSTAGRAM_ACCESS_TOKEN
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/scroll-to-top.js', mode: 'client' },
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
    // nuxt image loader
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-leaflet',
  ],

  image: {
    // Options
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
    
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Disable a plugin by passing false as value
    // 'postcss-url': false,
    'postcss-nested': {},
    'postcss-responsive-type': {},
    'postcss-hexrgba': {}
  },

  publicRuntimeConfig: {
    instagramAccessToken: process.env.INSTAGRAM_ACCESS_TOKEN || "none"
  },

  router: {
    base: '/' // for production only
    // base: '/bte-lab/' // for local development only (remove for production)

  }, 

  watch: ['~/assets/fonts/*.ttf', '~/assets/*.png', '~/components/*.vue', '~/pages/*.vue' ],

  svg: {
    vueSvgLoader: {
      // vue-svg-loader options
    },
    svgSpriteLoader: {
      // svg-sprite-loader options
    }
  }
}
