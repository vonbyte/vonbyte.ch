<template>
    <Layout :isLanding="story.content.component === 'landingpage'">
        <component
                v-if="story.content.component"
                :key="story.content._uid"
                :blok="story.content"
                :is="story.content.component"
        />
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
      return this.story.content.seo
    }
  },
  metaInfo() {
    return {
      title: this.seo ? this.seo.title : 'MISSING TITLE',
      titleTemplate: '%s',
      meta: [
        { name: 'description', content: this.seo ? this.seo.description : 'MISING DESCRIPTION'},
        { name: 'og:title', content: this.seo.og_title || this.seo.title },
        { name: 'og:description', content: this.seo.og_description || this.seo.description },
        { name: 'twitter:title', content: this.seo.twitter_title || this.seo.title },
        { name: 'twitter:description', content: this.seo.twitter_description || this.seo.description },
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
