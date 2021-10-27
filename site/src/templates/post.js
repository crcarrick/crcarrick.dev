import React, { Fragment } from 'react';

import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Seo from '../components/seo/seo';

export default function ContentfulPostTemplate({ data }) {
  return (
    <Fragment>
      <Seo title={data.post.title} />

      <MDXRenderer>{data.post.body.childMdx.body}</MDXRenderer>
    </Fragment>
  );
}

export const query = graphql`
  query ContentfulPostTemplate($id: String) {
    post: contentfulBlogPost(id: { eq: $id }) {
      title
      body {
        childMdx {
          body
        }
      }
    }
  }
`;
