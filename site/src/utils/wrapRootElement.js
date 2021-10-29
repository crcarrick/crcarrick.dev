import React from 'react';

import { MDXProvider } from '@mdx-js/react';

import * as Components from '@components';

const { CodeBlock, ...RestComponents } = Components;

const shortCodes = {
  ...RestComponents,
  code: CodeBlock,
  pre: (props) => <div {...props} />,
};

export const wrapRootElement = ({ element }) => {
  console.log(RestComponents);

  return <MDXProvider components={shortCodes}>{element}</MDXProvider>;
};
