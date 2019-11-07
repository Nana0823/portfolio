/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
    query {
      allContentfulBlog {
        edges {
            node {
                body {
                    childMarkdownRemark {
                        html
                    }
                }
                title
                updatedAt
                description {
                    description
                }
            }
        }
      }
    }
  `)
    data.allContentfulBlog.edges.forEach(edge => {
        const title = edge.node.title
        actions.createPage({
            path: title,
            component: require.resolve(`./src/components/templates/blog-item.js`),
            context: { title: title },
        })
    })
}