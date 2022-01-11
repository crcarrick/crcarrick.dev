import React, { Fragment } from 'react';

import parseRange from 'parse-numeric-range';
import Highlight, { defaultProps } from 'prism-react-renderer';

import * as S from './BlockCode.style';

import '../theme.css';

const getLineStr = (metastring) => {
  const regexp = /{([\d,-]+)}/;

  if (regexp.test(metastring)) {
    const [, lineStr] = regexp.exec(metastring);

    return lineStr;
  }
};

const createLineHighlighter = (range) => {
  const lineStr = getLineStr(range);

  if (lineStr) {
    const lines = parseRange(lineStr);

    return (idx) => lines.includes(idx + 1);
  }

  return () => false;
};

const highlightKeyword = ({ className, token }) => {
  if (!token.types.some((type) => type === 'keyword')) return className;

  return `${className} keyword-${token.content}`;
};

const renderToken =
  ({ getTokenProps }) =>
  (token, key) => {
    let { className, ...props } = getTokenProps({ token, key });

    return <span className={highlightKeyword({ className, token })} {...props} />;
  };

const renderLine =
  ({ getLineProps, shouldHighlightLine, willHighlightLines, ...rest }) =>
  (line, key) => {
    const props = getLineProps({ line, key });

    return (
      <S.Line
        {...props}
        highlight={shouldHighlightLine(key)}
        willHighlightLines={willHighlightLines}
      >
        {line.map(renderToken(rest))}
      </S.Line>
    );
  };

const trimTokens = (tokens) => (tokens.length >= 2 ? tokens.slice(0, -1) : tokens);

export const BlockCode = ({ className = 'language-jsx', children, metastring }) => {
  const language = className.replace('language-', '');
  const shouldHighlightLine = createLineHighlighter(metastring);
  const willHighlightLines = Boolean(metastring);

  return (
    <Highlight Prism={defaultProps.Prism} language={language} code={children}>
      {({ className, style, tokens, ...rest }) => {
        const lines = trimTokens(tokens);

        return (
          <Fragment>
            <S.Tag language={language} />
            <S.Pre className={className} style={style}>
              {lines.map(renderLine({ ...rest, shouldHighlightLine, willHighlightLines }))}
            </S.Pre>
          </Fragment>
        );
      }}
    </Highlight>
  );
};

export const CodeWrapper = S.CodeWrapper;
