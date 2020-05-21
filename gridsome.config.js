// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')
const autoprefixer = require('autoprefixer')

const postcssPlugins = [
  autoprefixer()
]

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/utils/_all.scss')
      ],
    })
}

module.exports = {
  siteName: 'vonByte',
  siteUrl: 'vonbyte.vb',
  titleTemplate: '%s | vonByte.ch',
  icon: {
    favicon: './src/favicon-32x32.png',
    touchicon: './src/favicon-196x196.png'
  },
  plugins: [
    {
      use: 'gridsome-source-storyblok',
      options: {
        client: {
          accessToken: 'i05NpNRl1dAUoD9ZR1ENCQtt'
        },
        version: 'draft',
      }
    }
  ],
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  },
  css: {
    loaderOptions: {
      scss: {
        implementation: require('dart-sass')
      },
      postcss: {
        plugins: postcssPlugins
      }
    }
  },
  host: 'vonbyte.vb'
}
