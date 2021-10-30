import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

import { transition } from '@utils/mixins';

export const Title = styled.h4`
  text-transform: uppercase;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  transition: ${transition('text-decoration')};
  color: var(--text);

  &:hover > ${Title} & {
    text-decoration: underline var(--red) 3px;
  }
`;

export const ImageWrapper = styled.div`
  min-height: 1px;
`;

export const Image = styled(GatsbyImage)`
  div:first-child[style] {
    padding-top: 56.25% !important;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
`;

export const Date = styled.div`
  margin-bottom: 1rem;
  color: ${({ theme }) => (theme.name === 'dark' ? theme.colors.green : theme.colors.text)};
`;

export const Description = styled.div``;

export const Tags = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  padding: 1rem;
`;
