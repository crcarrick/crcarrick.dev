const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Developer',
    description: `
      Chris Carrick is a senior engineer and front-end developer who loves 
      building cool things with tech.  He blogs about JavaScript, React, and Node.js.  
      He recently moved to Miami, Florida and really loves his dog. 
    `,
    url: 'https://www.crcarrick.dev',
    image: 'https://www.crcarrick.dev/static/me.png',
    author: {
      name: 'Chris Carrick',
      bio: `
        Chris Carrick is a senior front-end engineer at <a href="https://weare8.com">WeAre8</a>.
        He loves all things code, golf, sci-fi novels, and hitting the beach 
        with his girlfriend and dog.  He lives in Miami, Florida.
      `,
    },
    social: {
      twitter: '@crcarrick',
      github: 'crcarrick',
      spotify: 'chriscarrick77',
      linkedin: 'crcarrick',
    },
  },
  plugins: [
    // General
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '~': path.resolve(__dirname, 'src/'),
        },
      },
    },
    { resolve: 'gatsby-plugin-react-helmet' },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: path.resolve(__dirname, 'src/assets/svg/logo.svg'),
        name: 'crcarrick.dev',
        short_name: 'crcarrick.dev',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
      },
    },
    { resolve: 'gatsby-plugin-styled-components' },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_TRACKING_ID,
      },
    },

    // Images
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    { resolve: 'gatsby-plugin-image' },
    { resolve: 'gatsby-plugin-sharp' },
    { resolve: 'gatsby-transformer-sharp' },

    // MDX
    { resolve: 'gatsby-plugin-mdx' },

    // Sources
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.resolve(__dirname, 'src/assets/images'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: path.resolve(__dirname, 'src/pages'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: path.resolve(__dirname, 'content'),
      },
    },
  ],
}
