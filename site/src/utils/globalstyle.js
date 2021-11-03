import { createGlobalStyle, css } from 'styled-components';

import { adjust, breakpoint, hexToRgba, transition } from '@utils/mixins';
import { rhythm } from '@utils/typography';

export const GlobalStyle = createGlobalStyle`
  :root {
    ${({ theme: { color, mode, typography } }) => {
      const darkMode = mode.name === 'dark';
      const asideOpacity = 0.25;

      return css`
        // Base colors.  Shouldn't use these much
        // Should use the main color palette (body / text / primary / secondary / danger / etc)
        --black: ${color.black};
        --white: ${color.white};
        --red: ${color.red};
        --blue: ${color.blue};
        --green: ${color.green};
        --yellow: ${color.yellow};
        --purple: ${color.purple};
        --pink: ${color.pink};

        --dark: ${color.dark};
        --body: ${color.body};
        --text: ${color.text};
        --primary: ${color.primary};
        --secondary: ${color.secondary};
        --danger: ${color.danger};
        --warning: ${color.warning};
        --info: ${color.info};
        --success: ${color.success};

        --bg-aside-danger: ${hexToRgba(color.danger, asideOpacity)};
        --bg-aside-warning: ${hexToRgba(color.warning, asideOpacity)};
        --bg-aside-info: ${hexToRgba(color.info, asideOpacity)};
        --bg-aside-success: ${hexToRgba(color.success, asideOpacity)};
        --bg-card: ${adjust(color.body, darkMode ? 10 : -20)};
        --bg-code: ${adjust(color.dark, 5)};
        --bg-code-highlight: ${hexToRgba(adjust(color.dark, 25), 0.75)};
        --bg-inline-code: ${adjust(color.body, darkMode ? 45 : -55)};

        --border-width: 2px;

        --font-heading: ${typography.heading.family};
        --font-body: ${typography.body.family};
        --font-code: ${typography.code.font};
        --font-system: ${typography.system.family};

        --hero-shadow: ${adjust(color.primary, -15)};
        --hero-chair: ${hexToRgba(adjust(color.primary, 25), 0.5)};

        // Leave this for now in case I want to tweak it
        // If I end up not, can remove and just use --primary and --dark
        --logo-fill: var(--primary);
        --logo-stroke: var(--dark);

        --padding: ${rhythm(1 / 1.4)};
        --margin: ${rhythm(1 / 1.4)};

        ${breakpoint.lg} {
          --padding: ${rhythm(1)};
          --margin: ${rhythm(1)};
        }
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
    background-color: var(--body);
    color: var(--text);
    width: 100%;
    height: 100%;
    transition: ${transition('background-color', 'color')};
  }

  body {
    // prevent scrollbar from shifting content around when it shows / hides
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
