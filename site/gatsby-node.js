const fs = require('fs')

const LoadablePlugin = require('@loadable/webpack-plugin')

const Post = require.resolve('./src/templates/post.js')
const Project = require.resolve('./src/templates/project.js')

const UNIX_EPOCH = '1970-01-01T00:00:00.000Z'

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query CreatePages {
      posts: allMdx(
        filter: {
          fileAbsolutePath: { glob: "/**/blog/**" }
          frontmatter: { published: { ne: "${UNIX_EPOCH}" } }
        }
      ) {
        nodes {
          id
          slug
        }
      }
      projects: allMdx(
        filter: {
          fileAbsolutePath: { glob: "/**/projects/**" }
          frontmatter: { created: { ne: "${UNIX_EPOCH}" } }
        }
      ) {
        nodes {
          id
          slug
        }
      }
    }
  `)

  console.log(JSON.stringify(result.data.posts.nodes))

  const posts = result.data.posts.nodes ?? []
  const projects = result.data.projects.nodes ?? []

  for (let post of posts) {
    createPage({
      path: `/blog/${post.slug}`,
      component: Post,
      context: {
        id: post.id,
      },
    })
  }

  for (let project of projects) {
    createPage({
      path: `/projects/${project.slug}`,
      component: Project,
      context: {
        id: project.id,
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

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({ name: '@loadable/babel-plugin' })
}

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === 'build-javascript' || stage === 'develop' || stage === 'develop-html') {
    if (fs.existsSync(`public/loadable-stats.json`)) {
      fs.writeFileSync(`public/loadable-stats.json`, JSON.stringify({}))
    }

    actions.setWebpackConfig({
      plugins: [
        new LoadablePlugin({
          filename: stage === 'develop' ? `public/loadable-stats.json` : 'loadable-stats.json',
          writeToDisk: true,
        }),
      ],
    })
  }
}
