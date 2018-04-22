module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'interview',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {
        defer: true,
        src: 'https://use.fontawesome.com/releases/v5.0.10/js/all.js',
        integrity: 'sha384-slN8GvtUJGnv6ca26v8EzVaR9DC58QEwsIk9q1QXdCU8Yu8ck/tL/5szYlBbqmS+',
        crossOrigin: 'anonymous'
      }
    ]
  },
  env: {
    APIKEY: 'AIzaSyAFC9QSer-gW9mtiSeYMHWL0l2Ie1oTMMs',
    AUTHDOMAIN: 'interview-48c7e.firebaseapp.com',
    DATABASEURL: 'https://interview-48c7e.firebaseio.com',
    PROJECTID: 'interview-48c7e',
    STORAGEBUCKET: 'interview-48c7e.appspot.com',
    MESSAGINGSENDERID: '645507355043'
  },
  modules: [
    '@nuxtjs/pwa'
  ],
  css: [
    'normalize.css/normalize.css',
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/styles/index.less',
  ],
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/firebase',
    '@/plugins/auth',
    // '@/plugins/font-awesome',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},

  mode: 'spa',

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: [
      require('autoprefixer')({
        browsers: [
          "> 1%",
          "last 2 versions"
        ]
      }),
    ]
  }
}
