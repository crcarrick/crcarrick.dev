import Typography from 'typography';

const typography = new Typography({
  baseFontSize: 18,
  baseLineHeight: 1.75,
  headerFontFamily: ['Oswald', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  googleFonts: [
    {
      name: 'Oswald',
      styles: ['400', '700'],
    },
    {
      name: 'Roboto',
      styles: ['400', '400i', '700', '700i'],
    },
    {
      name: 'Roboto Mono',
      styles: ['400', '600'],
    },
  ],
});

export const { options, rhythm, scale } = typography;

export default typography;
