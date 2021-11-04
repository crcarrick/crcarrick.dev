import React from 'react';

import styled from 'styled-components';

import { Callout } from '@components/Callout';

export const Input = styled.input`
  width: 100%;
  padding: var(--space-xs) var(--space-md);
  margin-bottom: var(--space-xl);
  background-color: transparent;
  color: var(--color-text);
  border: solid var(--border-width);
  /* border-radius: 0; */

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
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
`;

export const Error = styled((props) => <Callout variant="danger" {...props} />)`
  margin: 0 auto;
`;
