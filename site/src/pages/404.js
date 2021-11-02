import React from 'react';

import styled from 'styled-components';

import { Layout } from '@components/Layout';

import FourOhFourSVG from '@assets/svg/hero/fourohfour.svg';

const FourOhFourWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Hero = styled(FourOhFourSVG)`
  max-width: 100%;
  height: auto;
`;

export default function FourOhFour() {
  return (
    <Layout>
      <FourOhFourWrapper>
        <Hero />
      </FourOhFourWrapper>
    </Layout>
  );
}
