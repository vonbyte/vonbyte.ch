<template>
    <nav :class="showMenu ? 'show-menu' : 'hide-menu'">
        <ul class="columns is-multiline is-gapless menu">
            <li v-for="menuLink in menulinks" :key="menuLink._uid" class="column is-12-small is-6-tablet is-4-desktop">
                <g-link :to="`/${menuLink.url.cached_url}/`"><span>{{menuLink.display}}</span></g-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: [
    'showMenu'
  ],
  data () {
    return {
      slug: "settings/global"
    }
  },
  computed: {
    menulinks () {
      return this.$static.settings.edges[0].node.content.HeaderLinks
    }
  }
}
</script>

<style scoped>

</style>

<static-query>
    query {
        settings: allStoryblokEntry(filter: {full_slug: {eq: "settings/global"}} limit: 1) {
            edges {
                node {
                    id
                    content
                 }
            }
        }
    }
</static-query>
