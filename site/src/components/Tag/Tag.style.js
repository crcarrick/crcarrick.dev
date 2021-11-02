import styled, { css } from 'styled-components';

import { breakpoint, transition } from '@utils/mixins';

const style = css`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  border: solid 1.5px var(--primary);
  margin: 0 0.25rem 0.25rem 0;
  padding: 0.4rem;
  white-space: nowrap;
  line-height: 1;
`;

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
    transform: translateY(-0.15rem);
  }
`;
