require('dotenv').config();
const { TMDB_KEY } = process.env;
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'MovieStocker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { property : "og:locale", content: "ja_JP"},
      { property : "og:type", content: "website"},
      { property : "og:title", content: "MovieStocker"},
      { property : "og:description", content: "最新映画情報を確認できる"},
      { property : "og:url", content: "https://movie-stocker.netlify.com/"},
      { property : "og:site_name", content: "MovieStocker"},
      { property : "og:image", content: "/ogp.jpg"},
      { property : "og:image:secure_url", content: "/ogp.jpg"},
      { property : "og:image:width", content: "1200"},
      { property : "og:image:height", content: "600"},
      { name:"twitter:card", content: "summary_large_image"},
      { name:"twitter:description", content: "最新映画情報を確認できる"},
      { name:"twitter:title", content: "最新映画情報を確認できる"},
      { name:"twitter:image", content: "/ogp.jpg"}
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
    '~/plugins/axios.js',
    '~/plugins/cookie-storage.js',
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

