// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import main css
require('~/assets/scss/main.scss')

// Import Default Layout
import DefaultLayout from '~/layouts/Default.vue'

// Import Stroyblok Components
import Page from './storyblok/components/Page'
import Plaincontent from './storyblok/components/Plaincontent'
import Teaser from './storyblok/components/Teaser'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Set Storyblok Components
  Vue.component('Page', Page)
  Vue.component('Plaincontent', Plaincontent)
  Vue.component('Teaser', Teaser)

  if (process.isClient) {
    const Unicon = require('vue-unicons').default

    Vue.use(Unicon);
  }
}
