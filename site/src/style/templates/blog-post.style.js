import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Image = styled(GatsbyImage)`
  div:first-child[style] {
    padding-top: 56.25% !important;
  }
`;
