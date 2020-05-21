// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import main css
require('~/assets/scss/main.scss')

// Import Default Layout
import DefaultLayout from '~/layouts/Default.vue'

// Import Storyblok Components
import Page from './storyblok/components/Page'
import Plaincontent from './storyblok/components/Plaincontent'
import Teaser from './storyblok/components/Teaser'
import Timeline from './storyblok/components/Timeline'

// Import Mixins
import helpers from '../mixins/helpers'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Set Storyblok Components
  Vue.component('Page', Page)
  Vue.component('Plaincontent', Plaincontent)
  Vue.component('Teaser', Teaser)
  Vue.component('Timeline', Timeline)

  // Set global mixins
  Vue.mixin(helpers)

  if (process.isClient) {

  }
}
