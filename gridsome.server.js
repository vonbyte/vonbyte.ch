// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(async ({ addSchemaTypes, addCollection }) => {

  })


  api.createPages(async ({ graphql, createPage }) => {

    // Get all pages from Storyblok API
    const { data } = await graphql(`{
      allStoryblokEntry {
        edges {
          node {
            id
            full_slug
          }
        }
      }
    }`)

    // Create a Page for each content
    data.allStoryblokEntry.edges.forEach(({ node }) => {

      if (node.full_slug !== 'global' && node.full_slug !== 'blog/zweiter-post' && node.full_slug !== 'skills' && node.full_slug !== 'experience' && node.full_slug !== 'contact' && node.full_slug !== 'blog/erster-post') {

        let path = `/${node.full_slug}`
        let component = './src/templates/Storyblok.vue'
        let showHome = true

        if (node.full_slug === 'home') {
          path = '/'
          component = './src/templates/Landing.vue'
          showHome = false
        }
          createPage({
            path,
            component,
            context: {
              id: node.id,
              showHome
            }
          })
      }
    })
  })
}
