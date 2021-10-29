const get = require('lodash.get');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = require.resolve('./src/templates/blog-post.js');

  const result = await graphql(`
    query CreatePages {
      posts: allContentfulBlogPost {
        nodes {
          id
          slug
        }
      }
    }
  `);

  const posts = get(result, 'data.posts.nodes', []);

  posts.forEach((post) =>
    createPage({
      path: `/blog/${post.slug}`,
      component: require.resolve(blogPost),
    })
  );
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
