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
].reduce(
  (colors, color) => ({
    ...colors,
    [color]: `rgb(var(--color-${color}-rgb))`,
  }),
  {}
)

const contextColors = [
  'body',
  'text',
  'primary',
  'accent',
  'info',
  'danger',
  'warning',
  'success',
].reduce(
  (colors, color) => ({
    ...colors,
    [color]: `rgb(var(--color-${color}))`,
  }),
  {}
)

const backgroundColors = ['info', 'danger', 'warning', 'success'].reduce(
  (colors, color) => ({
    ...colors,
    [color]: `rgb(var(--color-${color}) / 0.25)`,
  })
)

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [
    require('@tailwindcss/typography'),
    require('./src/utils/variants-plugin'),
  ],
  theme: {
    extend: {
      backgroundColor: {
        ...baseColors,
        ...contextColors,
        ...backgroundColors,
        card: 'var(--bg-card)',
        code: 'var(--bg-code)',
        'code-highlight': 'var(--bg-code-highlight)',
        'code-inline': 'var(--bg-code-inline)',
      },
      borderRadius: {
        DEFAULT: '3px',
      },
      borderWidth: {
        DEFAULT: '2px',
      },
      boxShadow: ({ theme }) => ({
        DEFAULT: `inset 0 0 0 ${theme('borderWidth')} ${theme(
          'colors.primary'
        )}`,
      }),
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
        // FIXME: this makes no sense
        xs: '0.65rem',
        sm: '0.75rem',
        md: '0.85rem',
        lg: '1rem',
        base: 'var(--font-size)',
      },
      lineHeight: {
        normal: 'var(--line-height)',
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
