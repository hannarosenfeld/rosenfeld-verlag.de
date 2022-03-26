const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
      {
        allContentfulAuthor {
          nodes {
            slug
            id
          }
        }
        allContentfulBook {
          nodes {
            slug
            id
          }
        }
      }
  `)

    console.log(result)

    result.data.allContentfulAuthor.nodes.forEach(node => {
        createPage({
            path: `${node.slug}`,
            component: require.resolve('./src/templates/autor.js'),
            context: {
                autorPageId: node.id,
            },
        })
    })
    result.data.allContentfulBook.nodes.forEach(node => {
        createPage({
            path: `${node.slug}`,
            component: require.resolve('./src/templates/book.js'),
            context: {
                bookPageId: node.id,
            },
        })
    })
}
