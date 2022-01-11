import { createGlobalStyle, css } from 'styled-components';

import { transition } from '@utils/mixins';

const backgrounds = ({ theme: { color, mode } }) => {
  const darkMode = mode.name === 'dark';
  const opacity = 0.25;

  return css`
    --bg-danger: ${color.danger.toRgba(opacity)};
    --bg-warning: ${color.warning.toRgba(opacity)};
    --bg-success: ${color.success.toRgba(opacity)};
    --bg-info: ${color.info.toRgba(opacity)};
    --bg-card: ${darkMode ? color.body.lighten(10) : color.trueWhite};
    --bg-code: ${color.dark.lighten(5)};
    --bg-code-highlight: ${color.dark.lighten(25).toRgba(0.75)};
    --bg-code-inline: ${darkMode ? color.body.lighten(45) : color.body.darken(15)};
  `;
};

// TODO: Clean this shit up when the design is finally
//       settled
const colors = ({ theme: { color } }) => css`
  --color-red: ${color.red};
  --color-blue: ${color.blue};
  --color-green: ${color.green};
  --color-yellow: ${color.yellow};
  --color-purple: ${color.purple};
  --color-pink: ${color.pink};
  --color-dark: ${color.dark};
  --color-black: ${color.black};
  --color-white: ${color.white};
  --color-true-white: ${color.trueWhite};
  --color-true-black: ${color.trueBlack};

  --color-body: ${color.body};
  --color-text: ${color.text};
  --color-primary: ${color.primary};
  --color-accent: ${color.accent};
  --color-danger: ${color.danger};
  --color-warning: ${color.warning};
  --color-success: ${color.success};
  --color-info: ${color.info};
`;

const fonts = ({ typography }) => css`
  --font-family-heading: ${typography.options.headerFontFamily.join(', ')};
  --font-family-body: ${typography.options.bodyFontFamily.join(', ')};
  --font-family-code: 'Roboto Mono', Consolas, Monaco, monospace;
  --font-code: 600 0.75rem / 1.6 var(--font-family-code);
`;

const spacing = ({ typography }) => css`
  --space-xs: ${typography.rhythm(1 / 8)};
  --space-sm: ${typography.rhythm(1 / 6)};
  --space-md: ${typography.rhythm(1 / 4)};
  --space-lg: ${typography.rhythm(1 / 2)};
  --space-xl: ${typography.rhythm(1 / 1)};
`;

const typography = ({ typography: { css: typographyCSS } }) => css`
  ${typographyCSS}
`;

export const GlobalStyle = createGlobalStyle`
  :root {
    ${({ theme: { color } }) => css`
      ${backgrounds}
      ${colors}
      ${fonts}
      ${spacing}

      --border-width: 2px;

      --hero-shadow: ${color.primary.darken(15)};
      --hero-chair: ${color.primary.lighten(25).toRgba(0.5)};
    `}
  }

  ${typography}

  * {
    box-sizing: border-box;
    border-radius: 3px;

    a {
      border-radius: 0;
    }

    aside {
      border-radius: 0;
    }
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    width: 100%;
    height: 100%;
  }
  
  body {
    margin: 0;
    background-color: var(--color-body);
    color: var(--color-text);
    transition: ${transition('background-color')};
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
