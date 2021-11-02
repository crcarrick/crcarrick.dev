/* eslint-disable default-case */
import React, { Fragment, useMemo, useReducer, useState } from 'react';

import { matchSorter } from 'match-sorter';

import { Tag } from '@components/Tag';

import * as S from './Filter.style';

const reducer = (state, action) => ({ ...state, [action.tag]: !state[action.tag] });
const getActiveTags = (state) => Object.keys(state).filter((tag) => state[tag]);

const Error = ({ activeTags, searchTerm }) => {
  return (
    <S.Error>
      <div>Sorry! There are no results for</div>
      <ul>
        {searchTerm && <li>Search Term: "{searchTerm}"</li>}
        {Boolean(activeTags.length) && (
          <li>Tags: {activeTags.map((tag) => `"${tag}"`).join(' + ')}</li>
        )}
      </ul>
    </S.Error>
  );
};

export const Filter = ({ children, posts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, dispatch] = useReducer(reducer, {});

  const handleSearch = ({ target: { value } }) => setSearchTerm(value);
  const handleClick = (tag) => dispatch({ tag });

  const tags = useMemo(
    () =>
      Array.from(new Set(posts.reduce((tags, post) => [...tags, ...post.frontmatter.tags], []))),
    [posts]
  );

  const searchResults = useMemo(() => {
    const activeTags = getActiveTags(state);

    // don't do any useless work (and preserve the sort by date order when there's no search query)
    if (!activeTags.length && !searchTerm) return posts;

    const filtered = matchSorter(posts, activeTags.join(' '), { keys: ['frontmatter.tags'] });
    const results = matchSorter(filtered, searchTerm, { keys: ['frontmatter.title'] });

    return results;
  }, [posts, searchTerm, state]);

  const results = searchResults;

  return (
    <Fragment>
      <S.Input type="search" placeholder="search..." onChange={handleSearch} value={searchTerm} />
      <S.Tags>
        {tags.map((tag, key) => (
          <Tag variant="button" key={key} onClick={() => handleClick(tag)} selected={state[tag]}>
            {tag}
          </Tag>
        ))}
      </S.Tags>
      {results.length ? (
        children({ results })
      ) : (
        <Error activeTags={getActiveTags(state)} searchTerm={searchTerm} />
      )}
    </Fragment>
  );
};
