import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { transition } from '@utils/mixins';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    --black: ${({ theme }) => theme.colors.black};
    --dark: ${({ theme }) => theme.colors.dark};
    --white: ${({ theme }) => theme.colors.white};
    --blue: ${({ theme }) => theme.colors.blue};
    --green: ${({ theme }) => theme.colors.green};
    --red: ${({ theme }) => theme.colors.red};

    --fontsize: ${({ theme }) => theme.font.size};

    --monofont: ${({ theme }) => theme.font.mono};
    --systemfont: ${({ theme }) => theme.font.system};

    --body: ${({ theme }) => theme.body};
    --text: ${({ theme }) => theme.text};
  }

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    font-family: var(--monofont);
    font-size: var(--fontsize);
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
