import React, { Fragment } from 'react';

import Seo from '../seo/seo';

import '../../style/global.css';

import { Title, Wrapper } from './layout.style';

export default function Layout({ children }) {
  return (
    <Fragment>
      <Seo title="Home Page" />
      <Wrapper>
        <Title>My Blog</Title>
        {children}
      </Wrapper>
    </Fragment>
  );
}
