import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

import { adjust, breakpoint, hexToRgba, transition } from '@utils/mixins';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    ${({ theme: { colors, font, name } }) => css`
      --black: ${colors.black};
      --white: ${colors.white};
      --dark: ${colors.dark};
      --red: ${colors.red};
      --blue: ${colors.blue};
      --green: ${colors.green};
      --yellow: ${colors.yellow};
      --purple: ${colors.purple};

      --body: ${colors.body};
      --text: ${colors.text};

      --aside-danger-bg: ${hexToRgba(colors.red, 0.25)};
      --aside-danger-bd: ${colors.red};
      --aside-warning-bg: ${hexToRgba(colors.yellow, 0.25)};
      --aside-warning-bd: ${colors.yellow};
      --aside-info-bg: ${hexToRgba(name === 'dark' ? colors.purple : colors.blue, 0.25)};
      --aside-info-bd: ${name === 'dark' ? colors.purple : colors.blue};
      --aside-success-bg: ${hexToRgba(colors.green, 0.25)};
      --aside-success-bd: ${colors.green};

      --bg-card: ${adjust(colors.body, name === 'dark' ? 10 : -20)};
      --bg-inline-code: ${adjust(colors.body, name === 'dark' ? 45 : -55)};

      --font-mono: ${font.mono};
      --font-system: ${font.system};

      // Leave this for now in case I want to tweak it
      // If I end up not, can remove and just use --red and --dark
      --logo-fill: var(--red);
      --logo-stroke: var(--dark);

      --link-post-underline: ${name === 'dark' ? 'var(--green)' : 'var(--dark)'};
    `}
  }

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    font-family: var(--font-mono);
    font-size: 16px;
    line-height: 1.75;
    background-color: var(--body);
    color: var(--text);
    width: 100%;
    height: 100%;
    transition: ${transition('background-color', 'color')};

    ${breakpoint.lg} {
      font-size: 18px;
    }
  }

  body {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
