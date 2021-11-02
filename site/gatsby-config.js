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
    image: '/logo.png',
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
          '@style': path.resolve(__dirname, 'src/style'),
          '@utils': path.resolve(__dirname, 'src/utils'),
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
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: path.resolve(__dirname, 'src/utils/typography'),
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
        path: path.resolve(__dirname, 'src/content'),
      },
    },
  ],
};
