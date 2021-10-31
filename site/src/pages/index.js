import React from 'react';

import styled from 'styled-components';

import { Layout } from '@layout';

import DeskSVG from '@assets/svg/hero/desk.svg';

const IndexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export default function IndexPage() {
  return (
    <Layout>
      <IndexWrapper>
        <DeskSVG style={{ width: '100%', height: 'auto' }} />
      </IndexWrapper>
    </Layout>
  );
}
