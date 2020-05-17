// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import main css
require('~/assets/scss/main.scss')

// Import Default Layout
import DefaultLayout from '~/layouts/Default.vue'

// Import Stroyblok Components
import Page from './storyblok/components/Page'
import PlainContentBlock from './storyblok/components/PlainContentBlock'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Set Storyblok Components
  Vue.component('Page', Page)
  Vue.component('PlainContentBlock', PlainContentBlock)

  if (process.isClient) {
    const Unicon = require('vue-unicons').default

    Vue.use(Unicon);
  }
}
