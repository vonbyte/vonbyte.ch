<template>
  <Layout :isLanding="story.content.component === 'landingpage'">
    <div class="hero-body is-relative">
      <div class="container has-text-centered">
        <logo wrapper-class="bigLogo" :has-main-heading="true"/>
        <h2>{{story.content.headline}}</h2>
      </div>
    </div>
  </Layout>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  name: 'LandingLayout',
  metaInfo() {
    return {
      title: this.seo.title || 'TITEL',
      titleTemplate: '%s',
      meta: [
        { name: 'description', content: this.seo.description },
        { name: 'og:title', content: this.seo.og_title || this.seo.title },
        { name: 'og:description', content: this.seo.og_description || this.seo.description },
        { name: 'twitter:title', content: this.seo.twitter_title || this.seo.title },
        { name: 'twitter:description', content: this.seo.twitter_description || this.seo.description },
      ]
    }
  },
  components: {
    Logo
  },
  data () {
    return {
      slug: "settings/global"
    }
  },
  computed: {
    story () {
      return this.$page.storyblokEntry
    },
    seo () {
      return this.story.content.seo
    }
  }
}
</script>

<page-query>
    query StoryblokEntry ($id: ID) {
      storyblokEntry (id: $id) {
        id,
        slug,
        content
      }
    }
</page-query>

<style scoped lang="scss">
.hero {
  &-body {
    top: -2rem;
    @media screen and (min-height: 640px){
      top: -5rem
    }

  }
  .vb-logo {
    animation: 2s grow;


    + h2 {
      animation: 2s grow;
      margin-top: 2rem;
      font-size: $size-4;
      @include from($tablet) {
        font-size: $size-3;
      }
      @include from($desktop) {
        font-size: $size-2;
        margin-top: 3rem;
      }
    }
  }
}
  @keyframes grow {
    0% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
