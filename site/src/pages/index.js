import React from 'react';

import styled from 'styled-components';

import { Layout } from '@components/Layout';
import { transition } from '@utils/mixins';

import DeskSVG from '@assets/svg/hero/desk.svg';

const IndexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Hero = styled(DeskSVG)`
  width: 100%;
  height: auto;

  [fill] {
    transition: ${transition('fill')};
  }
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
