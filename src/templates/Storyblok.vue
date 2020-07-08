<template>
    <Layout :isLanding="story && story.content.component === 'landingpage'">
        <component
                v-if="story && story.content.component"
                :key="story.content._uid"
                :blok="story.content"
                :is="story.content.component"
        />
        <component v-else :is="$context.componentName"></component>
    </Layout>
</template>

<script>
export default {
  name: 'StoryblokTemplate',
  computed: {
    story () {
      return this.$page.storyblokEntry
    },
    seo () {
      return  this.story ? this.story.content.seo : null;
    }
  },
  mounted () {
    console.log()
  },
  metaInfo() {
    return {
      title: this.seo ? this.seo.title : 'MISSING TITLE',
      titleTemplate: '%s',
      meta: [
        { name: 'description', content: this.seo ? this.seo.description : 'MISING DESCRIPTION'},
        { name: 'og:title', content: this.seo ? (this.seo.og_title || this.seo.title) : 'MISSING SEO' },
        { name: 'og:description', content: this.seo ? (this.seo.og_description || this.seo.description) : 'MISSING SEO' },
        { name: 'twitter:title', content: this.seo ? (this.seo.twitter_title || this.seo.title) : 'MISSING SEO' },
        { name: 'twitter:description', content: this.seo ? (this.seo.twitter_description || this.seo.description) : 'MISSING SEO' },
      ]
    }
  },
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

<style scoped>

</style>
