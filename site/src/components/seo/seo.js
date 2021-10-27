import React from 'react';

import { Helmet } from 'react-helmet';

export default function Seo({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href="https://www.crcarrick.dev" />
      <meta name="description" content="My Blog" />
    </Helmet>
  );
}
