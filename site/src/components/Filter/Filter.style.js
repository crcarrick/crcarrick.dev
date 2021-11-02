import React from 'react';
import styled from 'styled-components';

import { Callout } from '@components/Callout';
import { breakpoint } from '@utils/mixins';

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 1.25rem;
  color: var(--dark);
  background-color: var(--white);
  border: solid 1.5px var(--dark);

  &:focus {
    outline: solid 3px var(--primary);
  }

  ${breakpoint.lg} {
    margin-bottom: 2rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;

  ${breakpoint.lg} {
    margin-bottom: 2rem;
  }
`;

export const Error = styled((props) => <Callout variant="danger" {...props} />)`
  div {
    font-weight: 700;
  }

  ul {
    margin-left: 1rem;

    li {
      list-style: square;
      margin-left: 1rem;
    }
  }
`;
