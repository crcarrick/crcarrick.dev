import { createGlobalStyle, css } from 'styled-components';

import { transition } from '@utils/mixins';
import { rhythm } from '@utils/typography';

const backgrounds = ({ theme: { color, mode } }) => {
  const darkMode = mode.name === 'dark';
  const opacity = 0.25;

  return css`
    --bg-callout-danger: ${color.danger.toRgba(opacity)};
    --bg-callout-warning: ${color.warning.toRgba(opacity)};
    --bg-callout-info: ${color.info.toRgba(opacity)};
    --bg-callout-success: ${color.success.toRgba(opacity)};
    --bg-card: ${darkMode ? color.body.lighten(10) : color.body.darken(20)};
    --bg-code: ${color.dark.lighten(5)};
    --bg-code-highlight: ${color.dark.lighten(25).toRgba(0.75)};
    --bg-inline-code: ${darkMode ? color.body.lighten(45) : color.body.darken(55)};
  `;
};

const colors = ({ theme: { color } }) => css`
  --color-white: ${color.white};
  --color-red: ${color.red};
  --color-blue: ${color.blue};
  --color-green: ${color.green};
  --color-yellow: ${color.yellow};
  --color-purple: ${color.purple};
  --color-pink: ${color.pink};

  --color-dark: ${color.dark};
  --color-body: ${color.body};
  --color-text: ${color.text};
  --color-primary: ${color.primary};
  --color-accent: ${color.accent};
  --color-danger: ${color.danger};
  --color-warning: ${color.warning};
  --color-info: ${color.info};
  --color-success: ${color.success};
`;

const fonts = ({ theme: { typography } }) => css`
  --font-family-heading: ${typography.heading.family};
  --font-family-body: ${typography.body.family};
  --font-family-code: ${typography.code.font};
`;

const spacing = css`
  --space-xs: ${rhythm(1 / 8)};
  --space-sm: ${rhythm(1 / 6)};
  --space-md: ${rhythm(1 / 4)};
  --space-lg: ${rhythm(1 / 2)};
  --space-xl: ${rhythm(1 / 1)};
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
    transition: ${transition('background-color', 'color')};
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
