require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');

const aliasConfig = {
  options: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@style': path.resolve(__dirname, 'src/style'),
      '@svg': path.resolve(__dirname, 'src/svg'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
};

const contentfulConfig = {
  options: {
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    environment: process.env.CONTENTFUL_ENV || process.env.NODE_ENV,
    spaceId: process.env.CONTENTFUL_SPACE_ID,
  },
};

const fileSystemConfig = (name) => ({
  options: {
    name,
    path: `./src/${name}/`,
  },
  __key: name,
});

const googleConfig = {
  options: {
    trackingId: process.env.GOOGLE_TRACKING_ID,
  },
};

const googleFontsConfig = {
  options: {
    fonts: ['Roboto Mono'],
  },
};

const svgConfig = {
  options: {
    rule: {
      include: /svg/,
    },
  },
};

module.exports = {
  siteMetadata: {
    url: 'https://www.crcarrick.dev',
    title: 'Chris Carrick',
    description: 'Software Engineer',
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
      ...aliasConfig,
    },
    { resolve: 'gatsby-plugin-react-helmet' },
    { resolve: 'gatsby-plugin-styled-components' },
    {
      resolve: 'gatsby-plugin-google-analytics',
      ...googleConfig,
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      ...googleFontsConfig,
    },

    // Images
    {
      resolve: 'gatsby-plugin-react-svg',
      ...svgConfig,
    },
    { resolve: 'gatsby-plugin-image' },
    { resolve: 'gatsby-plugin-sharp' },
    { resolve: 'gatsby-transformer-sharp' },

    // MDX
    { resolve: 'gatsby-plugin-mdx' },

    // Sources
    {
      resolve: 'gatsby-source-contentful',
      ...contentfulConfig,
    },
    {
      resolve: 'gatsby-source-filesystem',
      ...fileSystemConfig('images'),
    },
    {
      resolve: 'gatsby-source-filesystem',
      ...fileSystemConfig('pages'),
    },
  ],
};
