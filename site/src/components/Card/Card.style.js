import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Card = styled.div`
  flex: 1;
  flex-direction: column;
  height: 100%;
  background-color: var(--text);
  background-color: var(--bg-card);
  color: var(--text);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
`;

export const Title = styled.h4`
  text-transform: uppercase;
`;

export const ImageWrapper = styled.div`
  min-height: 1px;
`;

export const Image = styled(GatsbyImage)`
  div:first-child[style] {
    padding-top: 56.25% !important;
  }
`;

export const Date = styled.div`
  margin-bottom: 1rem;
  color: var(--text);
`;

export const Description = styled.div``;

export const Tags = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  padding: 1rem;
`;
