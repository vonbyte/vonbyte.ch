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

    // Create static pages
    const locales = ['de','en']
    locales.forEach((locale) => {
      createPage({
        path: `/${locale}/blog`,
        component: './src/templates/Storyblok.vue',
        context: {
          locale,
          componentName: 'BlogOverview',
          showHome: true
        }
      })
    })


    // Create a Page for each content
    data.allStoryblokEntry.edges.forEach(({ node }) => {

      let path = `/${node.full_slug}`
      let locale = path.match('(^\/)([a-z]{2})([$|\/])')[2]

      let component = './src/templates/Storyblok.vue'
      let showHome = true
      let componentName = null

      if (node.full_slug.indexOf('/home') !== -1) {
        path = `/${locale}/`
        component = './src/templates/Landing.vue'
        showHome = false
      }

      createPage({
        path,
        component,
        context: {
          id: node.id,
          locale,
          componentName,
          showHome
        }
      })
    })
  })
}
