export default {
  // Target Deployment
  target: 'server',
  loading: {
    color: 'white', // <-- color
    height: '5px'   // <-- height
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'store_agriculture',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, 
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
    },
    { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.css' },
  ],
    script: [
      { src: '/js/coreui.bundle.min.js' }, 
      { src: 'https://app.sandbox.midtrans.com/snap/snap.js', 'data-client-key': 'SB-Mid-client-SEx-A4oxRS8vIorh' }, 
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.min.css',
    '@/assets/css/custom.css',
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/rating.js', mode: 'client' },
    { src: '~/plugins/chart.js', mode: 'client' },
    { src: '~/plugins/mixins.js' },
    { src: '~/plugins/bootstrap.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa',
  ],

  pwa: {
    meta: {
        title: 'Store Agriculture',
        author: 'Store Agriculture'
    },
    manifest: {
        name: 'Agriculture',
        short_name: 'Agriculture',
        description: 'Official Toko Online Penjualan Produk Agriculture',
        lang: 'en'
    },
    icon: {
        fileName: 'images/logo2.png',
        sizes: [64, 120, 144, 152, 192, 384, 512]
    }
},

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'vue-sweetalert2/nuxt',
  ],
  auth: {
    strategies: {
  
        //strategy "admin"
        admin: {
          scheme: 'local',
          token: {
            property: 'token',
            required: true,
            type: 'Bearer'
          },
          user: {
            property: 'user',
            // autoFetch: true
          },
          endpoints: {
            login: {
              url: '/api/admin/login',
              method: 'post',
              propertyName: 'token'
            },
            logout: {
              url: '/api/admin/logout',
              method: 'post'
            },
            user: {
              url: '/api/admin/user',
              method: 'get',
              propertyName: 'user'
            }
          },
        },
  
        //strategy "customer"
        customer: {
          scheme: 'local',
          token: {
            property: 'token',
            required: true,
            type: 'Bearer'
          },
          user: {
            property: 'user',
            // autoFetch: true
          },
          endpoints: {
            login: {
              url: '/api/customer/login',
              method: 'post',
              propertyName: 'token'
            },
            logout: {
              url: '/api/customer/logout',
              method: 'post'
            },
            user: {
              url: '/api/customer/user',
              method: 'get',
              propertyName: 'user'
            }
          },
        },
  
    },
  },
  
  ssr:false,
  generate: {
    fallback:true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: 'http://localhost:8000',
    // baseURL: 'https://devasn.online'
    // baseURL: 'http://storeagriculture.42web.io',
    baseURL: 'https://storeagriculture.com'

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
}
