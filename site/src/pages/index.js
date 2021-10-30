import React from 'react';

import { random } from 'lodash';
import styled from 'styled-components';

import { Layout } from '@layout';

import DeskSVG from '@assets/svg/hero/desk.svg';
import ProudSVG from '@assets/svg/hero/proud.svg';
import SittingSVG from '@assets/svg/hero/sitting.svg';
import StandingSVG from '@assets/svg/hero/standing.svg';
import ThinkingSVG from '@assets/svg/hero/thinking.svg';

const IndexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export default function IndexPage() {
  const heros = [DeskSVG, ProudSVG, SittingSVG, StandingSVG, ThinkingSVG];
  const Hero = heros[random(0, heros.length - 1)];

  return (
    <Layout>
      <IndexWrapper>
        <Hero style={{ width: '100%', height: 'auto' }} />
      </IndexWrapper>
    </Layout>
  );
}
