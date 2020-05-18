// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(async ({ addSchemaTypes, addCollection }) => {
    addSchemaTypes(`
    type StoryblokSetting implements Node {
      content: JSONObject
      name: String!
      created_at: Date
      published_at: Date
      id: ID!
      slug: String!
      full_slug: String!
      uuid: String!
      real_path: String
      lang: String
      position: Int
      is_startpage: Boolean
      parent_id: Int
      group_id: String
      first_published_at: Date
      release_id: Int
      meta_data: JSONObject
      sort_by_date: Date
    }
  `)
    addCollection('StoryblokSetting')
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

      if (node.full_slug !== 'global') {

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
