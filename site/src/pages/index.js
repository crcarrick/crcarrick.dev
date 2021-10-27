import React from 'react';

import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexPage {
      imageSharp(id: { eq: "17efcb61-8d62-55f6-aaea-0c708d78a178" }) {
        gatsbyImageData(width: 200)
      }
    }
  `);

  const image = getImage(data.imageSharp);

  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <GatsbyImage image={image} alt="gatsby logo" />
      <Link to="/blog">Blog</Link>
    </main>
  );
};

export default IndexPage;
