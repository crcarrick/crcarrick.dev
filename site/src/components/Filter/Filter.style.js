import React from 'react';
import styled from 'styled-components';

import { Callout } from '@components/Callout';
import { rhythm } from '@utils/typography';

export const Input = styled.input`
  width: 100%;
  padding: ${rhythm(1 / 8)} ${rhythm(1 / 4)};
  margin-bottom: var(--margin);
  color: var(--dark);
  background-color: var(--white);
  border: solid 1.5px var(--dark);
  border-radius: 0;

  &[type='search'] {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
    border: solid 2px var(--primary);
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: var(--margin);
`;

export const Error = styled((props) => <Callout variant="danger" {...props} />)`
  ul {
    margin-left: ${rhythm(1)};

    li {
      list-style: square;
    }
  }
`;
