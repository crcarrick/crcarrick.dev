const { fontFamily } = require('tailwindcss/defaultTheme')

const baseColors = [
  'red',
  'blue',
  'green',
  'yellow',
  'purple',
  'pink',
  'dark',
  'black',
  'white',
  'true-black',
  'true-white',
].reduce((colors, color) => ({
  ...colors,
  [color]: `rgb(var(--color-${color}))`
}), {})

const contextColors = [
  'body',
  'text',
  'primary',
  'accent',
  'info',
  'danger',
  'warning',
  'success',
].reduce((colors, color) => ({
  ...colors,
  [color]: `rgb(var(--color-${color}))`
}), {})

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [
    require('@tailwindcss/typography'),
    require('./utils/variants-plugin'),
  ],
  theme: {
    extend: {
      backgroundColor: {
        ...baseColors,
        ...contextColors
      },
      borderRadius: {
        DEFAULT: '3px',
      },
      borderWidth: {
        DEFAULT: '2px',
      },
      colors: {
        ...baseColors,
        ...contextColors,
      },
      fontFamily: {
        sans: ['var(--roboto)', ...fontFamily.sans],
        mono: ['var(--roboto-mono)', ...fontFamily.mono],
        serif: ['var(--roboto-slab)', ...fontFamily.serif],
      },
      fontSize: {
        base: 'var(--font-size)',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      spacing: {
        xs: 'var(--space-xs)',
        sm: 'var(--space-sm)',
        md: 'var(--space-md)',
        lg: 'var(--space-lg)',
        xl: 'var(--space-xl)',
      },
    },
  },
}
