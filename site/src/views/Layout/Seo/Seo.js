import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

export const Seo = ({ content, path = '', seoTitle }) => {
  const data = useStaticQuery(graphql`
    query Seo {
      site {
        siteMetadata {
          title
          description
          url
          image
          author {
            name
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { siteMetadata } = data.site
  const contentMetadata = content?.frontmatter ?? {}

  const title = seoTitle || contentMetadata.title || siteMetadata.title
  const description = contentMetadata.description || siteMetadata.description
  const url = new URL(path || '/', siteMetadata.url)
  const image = new URL(
    contentMetadata.featuredImage?.publicURL || siteMetadata.image,
    siteMetadata.url
  )

  return (
    <Helmet title={title} titleTemplate={`%s • ${siteMetadata.author.name}`}>
      <html lang="en" />
      <link rel="canonical" href={url} />

      {/* Basic */}
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* OpenGraph */}
      <meta property="og:url" content={url} />
      {content != null ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={siteMetadata.social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
