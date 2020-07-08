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
  computed: {
    menulinks () {
      console.log(this.$static.settings)
      const settings = this.$static.settings.edges.find((edge) => {

        return edge.node.full_slug.indexOf(this.$context.locale + '/settings') !== -1
      })
      return settings.node.content.HeaderLinks
    }
  }
}
</script>

<style scoped>

</style>

<static-query>
    query {
        settings: allStoryblokEntry(filter: {name: {eq: "settings"}}) {
            edges {
                node {
                    id
                    full_slug
                    content
                 }
            }
        }
    }
</static-query>
