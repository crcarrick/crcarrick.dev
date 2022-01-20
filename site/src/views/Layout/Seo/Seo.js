import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

export const Seo = ({ path = '', post, seoTitle }) => {
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
  const postMetadata = post?.frontmatter ?? {}

  const title = seoTitle || postMetadata.title || siteMetadata.title
  const description = postMetadata.description || siteMetadata.description
  const url = new URL(path || '/', siteMetadata.url)
  const image = new URL(
    postMetadata.featuredImage?.publicURL || siteMetadata.image,
    siteMetadata.url
  )

  return (
    <Helmet title={title} titleTemplate={`%s • ${siteMetadata.author.name}`}>
      <html lang="en" />
      <link rel="canonical" href={url} />

      {/* Google Fonts */}
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        preload
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&family=Roboto+Slab:wght@400;500;700&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
        rel="stylesheet"
      /> */}

      {/* Basic */}
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* OpenGraph */}
      <meta property="og:url" content={url} />
      {post != null ? <meta property="og:type" content="article" /> : null}
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
