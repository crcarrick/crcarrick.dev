import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

import { adjust, transition } from '@utils/mixins';

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

      --body: ${colors.body};
      --text: ${colors.text};

      --bg-card: ${adjust(colors.body, name === 'dark' ? 10 : -20)};

      --font-size: ${font.size};
      --font-mono: ${font.mono};
      --font-system: ${font.system};

      --logo-fill: ${name === 'dark' ? colors.green : colors.red};
      --logo-stroke: ${name === 'dark' ? colors.black : colors.blue};
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
    font-size: var(--font-size);
    background-color: var(--body);
    color: var(--text);
    width: 100%;
    height: 100%;
    transition: ${transition('background-color', 'color')};
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
