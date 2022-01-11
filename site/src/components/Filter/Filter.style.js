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
  font: var(--font-code);

  &[type='search'] {
    -webkit-appearance: none;
  }

  &:focus-visible {
    outline: solid var(--border-width) var(--color-primary);
    outline-offset: var(--border-width);
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
