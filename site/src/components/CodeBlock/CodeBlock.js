import React from 'react';

import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';

import * as S from './style';

export const CodeBlock = ({ className = 'language-jsx', children }) => {
  const language = className.replace('language-', '');

  return (
    <Highlight {...defaultProps} theme={theme} language={language} code={children}>
      {({ className, style, tokens: rawTokens, getLineProps, getTokenProps }) => {
        const tokens = rawTokens.length >= 2 ? rawTokens.slice(0, -1) : rawTokens;

        return (
          <S.Pre className={className} style={style}>
            {tokens.map((line, lineKey) => (
              <div {...getLineProps({ line, key: lineKey })}>
                {line.map((token, tokenKey) => (
                  <span {...getTokenProps({ token, key: tokenKey })} />
                ))}
              </div>
            ))}
          </S.Pre>
        );
      }}
    </Highlight>
  );
};
