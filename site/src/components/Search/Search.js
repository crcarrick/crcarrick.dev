import React, { Fragment, useMemo, useState } from 'react';

import { debounce } from 'lodash';
import { matchSorter } from 'match-sorter';

import * as S from './Search.style';

export const Search = ({ children, posts }) => {
  const [term, setTerm] = useState('');
  const handleSearch = debounce(({ target: { value } }) => setTerm(value), 200);

  const results = useMemo(
    () => matchSorter(posts, term, { keys: ['frontmatter.title', 'frontmatter.tags'] }),
    [posts, term]
  );

  return (
    <Fragment>
      <S.Input type="search" placeholder="Search for a post..." onChange={handleSearch} />
      {children({ results })}
    </Fragment>
  );
};
