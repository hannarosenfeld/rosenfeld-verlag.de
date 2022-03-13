/* exports.createPages = async ({ actions, graphql }) => {
 *   const { createPage } = actions
 *
 *   const result = await graphql(`
 *     {
 *       allDatoCmsPage {
 *         nodes {
 *           title
 *           slug
 *           originalId
 *         }
 *       }
 *       allDatoCmsAutor {
 *         nodes {
 *           originalId
 *         }
 *       }
 *     }
 *  `)
 *
 *   result.data.allDatoCmsPage.nodes.forEach(page => {
 *     console.log(page.slug)
 *     createPage({
 *       path: `/${page.slug === "home" ? "" : page.slug}`,
 *       component: require.resolve(`${page.slug === "autoren" ? "./src/templates/autoren.js" : "./src/templates/generic-page.js"}`),
 *       context: {
 *         pageId: page.originalId,
 *         autorenId: result.data.allDatoCmsAutor.originalId,
 *       },
 *     })
 *   })
 * } */
