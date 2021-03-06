const builtAt = new Date().toISOString()
const path = require('path')
const { I18N } = require('./locales/i18n-nuxt-config')
import blogsEn from './contents/en/blogsEn.js'
import blogsPt from './contents/pt/blogsPt.js'

const productionUrl = {
  en: "/en",
  pt: "/pt"
};
// const baseUrl = 'https://opencode.com';

module.exports = {
  env: {
    // baseUrl,
    productionUrl
  },
  head: {
    title: 'OpenCode',
    meta: [
      { charset: 'utf-8' }
    ],
    link: [
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'},
      { rel: 'icon', type: 'image/png', href: '/oc.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/png', href: '/oc.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/oc.png', sizes: '96x96' },
      { rel: 'icon', type: 'image/png', href: '/oc.png', sizes: '192x192' },
      { rel: 'apple-touch-icon', href: '/oc.png', sizes: '57x57' },
      { rel: 'apple-touch-icon', href: '/oc.png', sizes: '60x60' },
      { rel: 'apple-touch-icon', href: '/oc.png', sizes: '72x72' },
      { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-76x76.png', sizes: '76x76' },
      { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-114x114.png', sizes: '114x114' },
      { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-120x120.png', sizes: '120x120' },
      { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-144x144.png', sizes: '144x144' },
      { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-152x152.png', sizes: '152x152' },
      { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-180x180.png', sizes: '180x180' },
      { rel: 'mask-icon', type: 'image/png', href: '/favicons/safari-pinned-tab.svg', color: '#c1c1c1' }
    ]
  },
  loading: { color: '#E91E63' },
  css: [
    '@/assets/css/app.styl',
    'normalize.css/normalize.css',
    '@/assets/css/main.scss'
  ],

  build: {
    vendor: ['vuetify'],
    extend (config) {
      const rule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/i')
      config.module.rules.splice(config.module.rules.indexOf(rule), 1)

      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'contents'),
        options: {
          vue: {
            root: "dynamicMarkdown"
          }
        }
      }, {
        test: /\.(jpe?g|png)$/i,
        loader: 'responsive-loader',
        options: {
          placeholder: true,
          quality: 60,
          size: 1400,
          adapter: require('responsive-loader/sharp')
        }
      }, {
        test: /\.(gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'img/[name].[hash:7].[ext]'
        }
      });
    }
  },
  plugins: ['~/plugins/lazyload', '~plugins/vuetify.js', '~/plugins/globalComponents', { src: '~plugins/ga.js', ssr: false }],
  modules: [
    '@nuxtjs/workbox',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    ['nuxt-i18n', I18N],
    'nuxt-webfontloader'
  ],
  manifest: {
    name: 'OpenCode',
    description: 'teste',
    short_name: 'OpenCode',
    display: 'standalone',
    theme_color: '#E91E63',
    background_color: '#E91E63',
    lang: 'pt-br'
  },
  workbox: {
    importScripts: [
        'custom-sw.js'
    ],
    runtimeCaching: [
        {
            urlPattern: 'https://fonts.googleapis.com/.*',
            handler: 'cacheFirst',
            method: 'GET',
            strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
        }
    ]
  },

  styleResources: {
    scss: [
      '@/assets/css/utilities/_variables.scss',
      '@/assets/css/utilities/_helpers.scss',
      '@/assets/css/base/_grid.scss',
      '@/assets/css/base/_buttons.scss'
    ],
  },

  webfontloader: {
    custom: {
      families: ['Graphik', 'Tiempos Headline'],
      urls: ['/fonts/fonts.css']
    }
  },

  generate: {
    routes: [
      '/pt', '404'
    ]
    .concat(blogsEn.map(w => `/blog/${w}`))
    .concat(blogsPt.map(w => `pt/blog/${w}`))
  }
}
