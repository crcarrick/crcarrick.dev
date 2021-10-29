require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');

module.exports = {
  siteMetadata: {
    url: 'https://www.crcarrick.dev',
    title: 'Chris Carrick',
    description: 'Developer',
    twitter: 'crcarrick',
    github: 'crcarrick',
    twitch: 'tapzww',
    spotify: 'chriscarrick77',
    linkedin: 'crcarrick',
    image: '/me.png',
  },
  plugins: [
    // General
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@hooks': path.resolve(__dirname, 'src/hooks'),
          '@layout': path.resolve(__dirname, 'src/layout'),
          '@utils': path.resolve(__dirname, 'src/utils'),
        },
      },
    },
    { resolve: 'gatsby-plugin-react-helmet' },
    { resolve: 'gatsby-plugin-styled-components' },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_TRACKING_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Roboto Mono'],
      },
    },

    // Images
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
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
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment: process.env.CONTENTFUL_ENV || process.env.NODE_ENV,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `./src/assets/images/`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `./src/pages/`,
      },
      __key: 'pages',
    },
  ],
};
