const Post = require.resolve('./src/templates/post.js')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query CreatePages {
      posts: allMdx(filter: { frontmatter: { published: { ne: "1970-01-01T00:00:00.000Z" } } }) {
        nodes {
          id
          slug
        }
      }
    }
  `)

  const posts = result.data.posts.nodes ?? []

  for (let post of posts) {
    createPage({
      path: `/blog/${post.slug}`,
      component: Post,
      context: {
        id: post.id,
      },
    })
  }
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    SiteSiteMetadata: {
      imageUrl: {
        type: 'String',
        resolve: ({ url, image }) => new URL(image ?? '', url),
      },
    },
  }

  createResolvers(resolvers)
}
