import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    // base colors
    --color-red: #ea676c;
    --color-blue: #3f3d56;
    --color-green: #57b894;
    --color-yellow: #edd83d;
    --color-purple: #947bd3;
    --color-pink: #ff79c6;
    --color-dark: #30323d;
    --color-black: #21222a;
    --color-white: #f2f2f2;
    --color-true-black: #000000;
    --color-true-white: #ffffff;

    // context colors
    --color-body: var(--color-white);
    --color-text: var(--color-dark);
    --color-primary: var(--color-red);
    --color-accent: var(--color-dark);
    --color-info: var(--color-blue);
    --color-danger: var(--color-red);
    --color-warning: var(--color-yellow);
    --color-success: var(--color-green);

    // font
    --font-size: 16px;
    --line-height: 1.5;

    // borders
    --border-radius: 3px;
    --border-width: 2px;

    // spacing
    --space-xs: 1rem;
    --space-sm: 1rem;
    --space-md: 1rem;
    --space-lg: 1rem;
    --space-xl: 1rem;

    // misc
    // TODO: --hero-shadow --hero-chair
  }

  [data-theme="dark"] {
    --color-body: var(--color-black);
    --color-text: var(--color-true-white);
    --color-primary: var(--color-purple);
    --color-accent: var(--color-white);
    --color-info: var(--color-purple);
  }

  @media screen and (min-width: 768px) {
    --font-size: 18px;
    --line-height: 1.5;
  }

  @media screen and (min-width: 1024px) {
    --font-size: 20px;
    --line-height: 1.5;
  }

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
  }

  html {
    font-family: 'Roboto', Tahoma, sans-serif;
    font-size: var(--font-size);
    line-height: var(--line-height);
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
    transition: background-color 0.3s ease 0s;
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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto Slab', Georgia, serif;
  }
`
