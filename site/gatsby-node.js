const get = require('lodash.get');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

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
      path: post.slug,
      component: require.resolve(`./src/templates/post.js`),
    }),
  );
};
