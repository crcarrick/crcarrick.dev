import styled from 'styled-components';

import { transition } from '@utils/mixins';

export const BlogPostCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: ${transition('box-shadow')};
  flex: 1;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
