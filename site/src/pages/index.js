import React from 'react';

import styled from 'styled-components';

import { Layout } from '@layout';

import { Button } from '@components';
import SittingSVG from '@assets/svg/hero/sitting.svg';

const IndexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Hero = styled(SittingSVG)`
  max-width: 100%;
  height: auto;
`;

export default function IndexPage() {
  return (
    <Layout>
      <IndexWrapper>
        <Button>TEST</Button>
        <Hero />
      </IndexWrapper>
    </Layout>
  );
}
