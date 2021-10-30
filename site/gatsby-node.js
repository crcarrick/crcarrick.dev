const get = require('lodash.get');

const Post = require.resolve('./src/templates/post.js');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query CreatePages {
      posts: allMdx {
        nodes {
          id
          slug
        }
      }
    }
  `);

  const posts = get(result, 'data.posts.nodes', []);

  posts.forEach((post) => {
    createPage({
      path: `/blog/${post.slug}`,
      component: Post,
      context: {
        id: post.id,
      },
    });
  });
};

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    SiteSiteMetadata: {
      imageUrl: {
        type: 'String',
        resolve: ({ url, image }) => new URL(image ?? '', url),
      },
      tagLine: {
        type: 'String',
        resolve: ({ title, description }) => `${title} - ${description}`,
      },
    },
  };

  createResolvers(resolvers);
};
