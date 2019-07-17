require('dotenv').config();
const { TMDB_KEY } = process.env;

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt_qiita_api',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
	modules: [
		'@nuxtjs/axios'
	],
	axios: {

	},
	plugins: [
		'~/plugins/axios.js'
	],
	env: {
    TMDB_KEY
  },
  css: [
    // Node.js モジュールを直接ロードする (ここでは SASS ファイル)
    { src: '~assets/main.scss', lang: 'scss' }
    // プロジェクト内の CSS ファイル
  //  '@/assets/css/main.css',
    // プロジェクト内の SCSS ファイル
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

