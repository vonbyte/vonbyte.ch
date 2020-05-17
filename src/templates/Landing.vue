<template>
  <Layout :isLanding="story.content.component === 'landingpage'">
    <div class="hero-body is-relative">
      <div class="container has-text-centered">
        <logo/>
        <h1>{{story.content.headline}}</h1>
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
      title: this.seo.title,
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
    top: -4rem
  }
  .vb-logo {
    animation: 2s grow;
    margin: auto;
    width: 80%;
    max-width: 800px;

    + h1 {
      animation: 2s grow;
      margin-top: 2rem;
      font-size: $size-4;
      @include from($tablet) {
        font-size: $size-3;
      }
      @include from($desktop) {
        font-size: $size-2;
      }
    }
  }
}
</style>
