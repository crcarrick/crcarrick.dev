import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

import { adjust, breakpoint, hexToRgba, transition } from '@utils/mixins';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    ${({ theme: { colors, font, name } }) => {
      const darkMode = name === 'dark';
      const asideOpacity = 0.25;

      // Colors
      const bodyColor = darkMode ? colors.blue : colors.white;
      const textColor = darkMode ? adjust(colors.white, 10) : adjust(colors.blue, -5);
      const primaryColor = darkMode ? colors.purple : colors.red;
      const secondaryColor = darkMode ? colors.purple : colors.red;
      const dangerColor = colors.red;
      const warningColor = colors.yellow;
      const infoColor = darkMode ? colors.purple : colors.blue;
      const successColor = colors.green;

      return css`
        // Base colors.  Shouldn't use these much
        // Should use the main color palette (body / text / primary / secondary / danger / etc)
        --black: ${colors.black};
        --white: ${colors.white};
        --dark: ${colors.dark};
        --red: ${colors.red};
        --blue: ${colors.blue};
        --green: ${colors.green};
        --yellow: ${colors.yellow};
        --purple: ${colors.purple};
        --teal: ${colors.teal};
        --pink: ${colors.pink};

        --body: ${bodyColor};
        --text: ${textColor};
        --primary: ${primaryColor};
        --secondary: ${secondaryColor};
        --danger: ${dangerColor};
        --warning: ${warningColor};
        --info: ${infoColor};
        --success: ${successColor};

        --bg-aside-danger: ${hexToRgba(dangerColor, asideOpacity)};
        --bg-aside-warning: ${hexToRgba(warningColor, asideOpacity)};
        --bg-aside-info: ${hexToRgba(infoColor, asideOpacity)};
        --bg-aside-success: ${hexToRgba(successColor, asideOpacity)};
        --bg-card: ${adjust(colors.body, darkMode ? 10 : -20)};
        --bg-inline-code: ${adjust(colors.body, darkMode ? 45 : -55)};

        --font-mono: ${font.mono};
        --font-system: ${font.system};

        --hero-shadow: ${adjust(primaryColor, -15)};
        --hero-chair: ${hexToRgba(adjust(primaryColor, 25), 0.5)};

        // Leave this for now in case I want to tweak it
        // If I end up not, can remove and just use --primary and --dark
        --logo-fill: var(--primary);
        --logo-stroke: var(--dark);

        --link-post-underline: ${darkMode ? colors.red : colors.dark};
      `;
    }}
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
