import styled, { css } from 'styled-components';

import { transition } from '@utils/mixins';
import { rhythm, scale } from '@utils/typography';

const style = () => {
  const { fontSize, lineHeight } = scale(-1 / 2);
  const margin = rhythm(1 / 10);
  const padding = rhythm(1 / 5);

  return css`
    font-size: ${fontSize};
    line-height: ${lineHeight};
    margin: 0 ${margin} ${margin} 0;
    padding: ${padding};
    text-transform: uppercase;
    border: solid 1.5px var(--primary);
    white-space: nowrap;
    line-height: 1;
  `;
};

export const Tag = styled.div`
  ${style}
`;

export const TagButton = styled.button`
  ${style}

  cursor: pointer;
  transition: ${transition('all')};

  ${({ selected }) => css`
    background: ${selected ? 'var(--primary)' : 'transparent'};
    color: ${selected ? 'var(--white)' : 'inherit'};
  `}

  &:focus,
  &:hover {
    outline: none;
    transform: translateY(${rhythm(-1 / 20)});
  }
`;
