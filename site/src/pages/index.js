import React from 'react';

import styled from 'styled-components';

import { Layout } from '@layout';

import SittingSVG from '@svg/hero/sitting.svg';
import StandingSVG from '@svg/hero/standing.svg';

const IndexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const heroStyle = `
  max-width: 100%;
  height: auto;
`;

const SittingHero = styled(SittingSVG)`
  ${heroStyle}
`;
const StandingHero = styled(StandingSVG)`
  ${heroStyle}
`;

export default function IndexPage() {
  const Hero = Math.random() < 0.5 ? SittingHero : StandingHero;

  return (
    <Layout>
      <IndexWrapper>
        <Hero />
      </IndexWrapper>
    </Layout>
  );
}
