import Typography from 'typography';

const typography = new Typography({
  baseFontSize: 18,
  baseLineHeight: 1.75,
  headerFontFamily: ['Oswald', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  googleFonts: [
    {
      name: 'Oswald',
      styles: ['400', '700'],
    },
    {
      name: 'PT Mono',
      styles: ['400'],
    },
    {
      name: 'Roboto Mono',
      styles: ['400', '600'],
    },
    {
      name: 'Open Sans',
      styles: ['400', '700'],
    },
  ],
});

export const { options, rhythm, scale } = typography;

export default typography;
