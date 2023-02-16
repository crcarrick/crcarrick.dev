module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-import': {},
    'postcss-plugin-color-explode': {
      prefix: '--color',
      types: ['#'],
    },
    tailwindcss: {},
  },
}
