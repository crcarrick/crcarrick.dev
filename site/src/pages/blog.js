import React, { Fragment } from 'react';

import { graphql, Link, useStaticQuery } from 'gatsby';
import { get } from 'lodash';

import Seo from '../components/seo/seo';

export default function BlogPage() {
  const data = useStaticQuery(graphql`
    query BlogPage {
      posts: allContentfulBlogPost {
        nodes {
          title
          slug
        }
      }
    }
  `);

  const posts = get(data, 'posts.nodes', []);

  return (
    <Fragment>
      <Seo title="Posts" />

      <h2>These are my posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
