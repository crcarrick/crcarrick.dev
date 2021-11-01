import React from 'react';

import parseRange from 'parse-numeric-range';
import Highlight, { defaultProps } from 'prism-react-renderer';
import styled from 'styled-components';

import * as S from './style';

import '@style/vendor/prism.theme.css';

const createLineHighlighter = (range) => {
  const regexp = /{([\d,-]+)}/;

  if (regexp.test(range)) {
    const [, lineStr] = regexp.exec(range);
    const lines = parseRange(lineStr);

    return (idx) => lines.includes(idx + 1);
  }

  return () => false;
};

const highlightKeyword = (className, token) => {
  if (!token.types.some((type) => type === 'keyword')) return className;

  return `${className} keyword-${token.content}`;
};

const renderToken =
  ({ getTokenProps }) =>
  (token, key) => {
    let { className, ...props } = getTokenProps({ token, key });

    return <span className={highlightKeyword(className, token)} {...props} />;
  };

const renderLine =
  ({ getLineProps, shouldHighlightLine, ...rest }) =>
  (line, key) => {
    const props = getLineProps({ line, key });

    return (
      <S.Line {...props} highlight={shouldHighlightLine(key)}>
        {line.map(renderToken(rest))}
      </S.Line>
    );
  };

export const Code = ({ className = 'language-jsx', children, metastring }) => {
  const language = className.replace('language-', '');
  const shouldHighlightLine = createLineHighlighter(metastring);

  return (
    <Highlight Prism={defaultProps.Prism} language={language} code={children}>
      {({ className, style, tokens, ...rest }) => {
        const lines = tokens.length >= 2 ? tokens.slice(0, -1) : tokens;

        return (
          <S.Pre className={className} style={style}>
            {lines.map(renderLine({ ...rest, shouldHighlightLine }))}
          </S.Pre>
        );
      }}
    </Highlight>
  );
};

// Highlighting / numbering fix for smaller screen (https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/#optional-add-line-numbering)
export const CodeHighlight = styled.div`
  background-color: #282a36; //-- dracula bg .. overwriting for now
  background-color: var(--dark);
  overflow: auto;
  margin: 2rem 0;

  pre[class*='language-'] {
    background-color: transparent;
    float: left;
    min-width: 100%;
  }
`;
