import React from 'react';

import FourOhFour from '../404';

export default function BlogPage() {
  // const data = useStaticQuery(graphql`
  //   query {
  //     posts: allContentfulBlogPost {
  //       nodes {
  //         title
  //         slug
  //       }
  //     }
  //   }
  // `);

  // const posts = get(data, 'posts.nodes', []);

  return <FourOhFour />;
}
