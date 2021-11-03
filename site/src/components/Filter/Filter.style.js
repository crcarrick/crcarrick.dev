import React from 'react';

import styled from 'styled-components';

import { Callout } from '@components/Callout';
import { rhythm } from '@utils/typography';

export const Input = styled.input`
  width: 100%;
  padding: ${rhythm(1 / 8)} ${rhythm(1 / 4)};
  margin-bottom: var(--margin);
  color: var(--text);
  background-color: transparent;
  border: solid var(--border-width);
  border-radius: 0;

  &[type='search'] {
    -webkit-appearance: none;
  }

  &:focus-visible {
    outline: none;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: var(--margin);
`;

export const Error = styled((props) => <Callout variant="danger" {...props} />)`
  margin: 0 auto;
`;
