import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

export const Seo = ({ path = '', title }) => {
  const data = useStaticQuery(graphql`
    query Seo {
      site {
        siteMetadata {
          description
          imageUrl
          tagLine
          title
          twitter
          url
        }
      }
    }
  `);

  const metadata = data.site.siteMetadata;

  const seoTitle = title ?? metadata.title;
  const url = new URL(path ?? '/', metadata.url);

  const { description, imageUrl, tagLine, twitter } = metadata;

  return (
    <Helmet title={tagLine}>
      <html lang="en" />
      <link rel="canonical" href={url} />

      {/* Basic */}
      <meta name="description" content={description} />
      <meta name="image" content={imageUrl} />
      <meta name="image:alt" content={description} />

      {/* OpenGraph */}
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:title" content={seoTitle} />
      {path.startsWith('/blog') && <meta property="og:type" content="article" />}
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={`@${twitter}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={description} />
      <meta name="twitter:site" content={`@${twitter}`} />
      <meta name="twitter:title" content={title} />
    </Helmet>
  );
};
