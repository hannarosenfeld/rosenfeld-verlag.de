exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulBook {
        nodes {
          slug
          title
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
}
