export const siteConfig = {
  title: 'Chris Carrick',
  description:
    'Chris Carrick is a staff engineer and front-end developer who loves building cool things with tech. He blogs about JavaScript, React, and Node.js.',
  url: 'https://www.crcarrick.dev',
  image: 'https://www.crcarrick.dev/images/me.png',
  author: {
    name: 'Chris Carrick',
    bio: 'Chris Carrick is a staff software engineer with over {experience} of experience building beautiful web front-ends. He loves all things JS, golf, sci-fi novels, and hitting the beach with his girlfriend and dog.',
    location: 'Miami, FL',
  },
  social: {
    github: 'crcarrick',
    linkedin: 'crcarrick',
    spotify: 'chriscarrick77',
    twitter: '@crcarrick',
  },
  nav: [
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
  ],
} as const
