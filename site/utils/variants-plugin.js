const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addVariant }) => {
  addVariant('hocus', ['&:hover', '&:focus'])
  addVariant('hactive', ['&:hover', '&:active'])
  // TODO: need a better name for this 🙁
  addVariant('pseudo', ['&:hover', '&:focus', '&:active'])
})
