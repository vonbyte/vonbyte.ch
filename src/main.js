// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import main css
require('~/assets/scss/main.scss')

// Import Default Layout
import DefaultLayout from '~/layouts/Default.vue'

// Import Storyblok Components
import Page from './storyblok/components/Page'
import Blog from './storyblok/components/Blog'
import Plaincontent from './storyblok/components/Plaincontent'
import SimpleText from './storyblok/components/SimpleText'
import Teaser from './storyblok/components/Teaser'
import Timeline from './storyblok/components/Timeline'
import SkillWrapper from './storyblok/components/SkillWrapper'
import ProjectGroup from './storyblok/components/ProjectGroup'
import Grid from './storyblok/components/Grid'
import ContactForm from './storyblok/components/ContactForm'
import ContactItem from './storyblok/components/ContactItem'
import ContentWrapper from './storyblok/components/ContentWrapper'
import ImageBlock from './storyblok/components/ImageBlock'
import Spacer from './storyblok/components/Spacer'
import BlogOverview from './components/BlogOverview'

// Import Mixins
import helpers from '../mixins/helpers'

// import external librabies
import dayjs from 'dayjs'
import axios from 'axios'


export default function (Vue, { router, head, isClient }) {

  require('dayjs/locale/de')
  require('dayjs/locale/en')

  // Set external libraies
  Vue.prototype.$dayjs = dayjs
  Vue.prototype.axios = axios

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Set Storyblok Components
  Vue.component('Page', Page)
  Vue.component('Blog', Blog)
  Vue.component('Plaincontent', Plaincontent)
  Vue.component('Teaser', Teaser)
  Vue.component('Timeline', Timeline)
  Vue.component('SkillWrapper', SkillWrapper)
  Vue.component('ProjectGroup',ProjectGroup)
  Vue.component('Grid',Grid)
  Vue.component('ContactForm',ContactForm )
  Vue.component('ContactItem',ContactItem )
  Vue.component('Spacer',Spacer )
  Vue.component('ContentWrapper',ContentWrapper )
  Vue.component('SimpleText',SimpleText )
  Vue.component('ImageBlock',ImageBlock )
  Vue.component('BlogOverview',BlogOverview )


  // Set global mixins
  Vue.mixin(helpers)

}
