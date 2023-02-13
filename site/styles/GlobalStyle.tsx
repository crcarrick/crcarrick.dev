import { createGlobalStyle, css } from 'styled-components'

import {
  RED,
  BLUE,
  GREEN,
  YELLOW,
  PURPLE,
  PINK,
  BLACK,
  WHITE,
  TRUE_BLACK,
  TRUE_WHITE,
  DARK,
} from '~/styles/colors'
import { spacing } from '~/styles/spacing'
import { breakpoint, transition } from '~/utils/mixins'

const COLORS = css`
  --color-red: ${RED.toString()};
  --color-blue: ${BLUE.toString()};
  --color-green: ${GREEN.toString()};
  --color-yellow: ${YELLOW.toString()};
  --color-purple: ${PURPLE.toString()};
  --color-pink: ${PINK.toString()};
  --color-dark: ${DARK.toString()};
  --color-black: ${BLACK.toString()};
  --color-white: ${WHITE.toString()};
  --color-true-black: ${TRUE_BLACK.toString()};
  --color-true-white: ${TRUE_WHITE.toString()};

  --color-danger: var(--color-red);
  --color-warning: var(--color-yellow);
  --color-success: var(--color-green);
`

const MISC = css`
  --border-radius: 3px;
  --border-width: 2px;
  // TODO: --hero-shadow --hero-chair
`

const SPACING = css`
  ${() => {
    const space = spacing()

    return css`
      --space-xs: ${space.xs};
      --space-sm: ${space.sm};
      --space-md: ${space.md};
      --space-lg: ${space.lg};
      --space-xl: ${space.xl};
    `
  }}
`

const TYPOGRAPHY = css`
  :root {
    --font-size: 16px;
    --line-height: 1.5;
  }

  html {
    font-family: 'Roboto', Tahoma, sans-serif;
    font-size: var(--font-size);
    line-height: var(--line-height);
  }

  ${breakpoint.md} {
    --font-size: 18px;
    --line-height: 1.5;
  }

  ${breakpoint.lg} {
    --font-size: 20px;
    --line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto Slab', Georgia, serif;
  }
`

export const GlobalStyle = createGlobalStyle`
  :root {
    ${COLORS}
    ${MISC}
    ${SPACING}

    --color-body: var(--color-white);
    --color-text: var(--color-dark);
    --color-primary: var(--color-red);
    --color-accent: var(--color-dark);
    --color-info: var(--color-blue);
  }

  [data-theme="dark"] {
    --color-body: var(--color-black);
    --color-text: var(--color-true-white);
    --color-primary: var(--color-purple);
    --color-accent: var(--color-white);
    --color-info: var(--color-purple);
  }

  ${TYPOGRAPHY}

  * {
    box-sizing: border-box;
    border-radius: var(--border-radius);

    @supports (scrollbar-width: thin) and (scrollbar-color: var(--color-primary) var(--color-dark)) {
      scrollbar-width: thin;
      scrollbar-color: var(--color-primary) var(--color-dark);
    }

    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    &::-webkit-scrollbar-track {
      background: var(--color-dark);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-primary);
      border-radius: var(--border-radius);
    }

    html,
    body {
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
      border-radius: 0;
    }
  }
`
