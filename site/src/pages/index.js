import React from 'react';

import styled from 'styled-components';

import { Layout } from '@layout';

import SittingSVG from '@svg/hero/sitting.svg';

const IndexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Hero = styled(SittingSVG)`
  max-width: 100%none;
  height: auto;
`;

export default function IndexPage() {
  return (
    <Layout>
      <IndexWrapper>
        <Hero />
      </IndexWrapper>
    </Layout>
  );
}
