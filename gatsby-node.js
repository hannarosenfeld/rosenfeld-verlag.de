exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulAuthor {
        nodes {
          slug
        }
      }
      allContentfulBook {
        nodes {
          slug
        }
      }
    }
    `)
  data.allContentfulBook.nodes.forEach(node => {
      const slug = node.slug
      actions.createPage({
          path: `buecher/${slug}`,
          component: require.resolve(`./src/templates/book.js`),
          context: { slug: slug },
        })
  })
    data.allContentfulAuthor.nodes.forEach(node => {
        const slug = node.slug
        actions.createPage({
            path: `autoren/${slug}`,
            component: require.resolve(`./src/templates/autor.js`),
            context: { slug: slug },
        })
    })
}
