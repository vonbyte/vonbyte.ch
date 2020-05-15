// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

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
        path.resolve(__dirname, './src/assets/sass/_variables.scss'),
      ],
    })
}

module.exports = {
  siteName: 'vonByte',
  siteDescription: 'My personal site and resume',
  siteUrl: 'vonbyte.vb',
  titleTemplate: '%s | <sitename>',
  plugins: [],
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('sass').oneOf(type))
    })

    // or if you use scss
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
