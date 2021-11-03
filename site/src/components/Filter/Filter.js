import React, { Fragment, useMemo, useState } from 'react';

import { pickBy } from 'lodash';
import { matchSorter } from 'match-sorter';

import { Tag } from '@components/Tag';

import * as S from './Filter.style';

export const Filter = ({ children, posts }) => {
  const tags = useMemo(
    () =>
      posts
        .flatMap((post) => post.frontmatter.tags)
        .reduce((tags, tag) => ({ ...tags, [tag]: false }), {}),
    [posts]
  );

  const [textQuery, setTextQuery] = useState('');
  const [tagsQuery, setTagsQuery] = useState(tags);

  const handleTextInput = ({ target: { value } }) => setTextQuery(value);
  const handleTagsClick = (tag) => setTagsQuery((tq) => ({ ...tq, [tag]: !tq[tag] }));

  const query = useMemo(
    () => Object.keys(pickBy(tagsQuery, Boolean)).concat(textQuery).filter(Boolean),
    [textQuery, tagsQuery]
  );

  const results = useMemo(() => {
    if (!query.length) return posts;

    return query.reduceRight(
      (results, term) =>
        matchSorter(results, term, {
          keys: ['frontmatter.title', 'frontmatter.tags'],
        }),
      posts
    );
  }, [posts, query]);

  return (
    <Fragment>
      <S.Input type="search" placeholder="search..." onChange={handleTextInput} value={textQuery} />
      <S.Tags>
        {Object.entries(tagsQuery).map(([tag, isActive]) => (
          <Tag variant="button" key={tag} isActive={isActive} onClick={() => handleTagsClick(tag)}>
            {tag}
          </Tag>
        ))}
      </S.Tags>
      {results.length ? (
        children({ results })
      ) : (
        <S.Error>
          Sorry! There are no results for:{' '}
          {query
            .filter(Boolean)
            .map((term) => `"${term}"`)
            .join(' + ')}
        </S.Error>
      )}
    </Fragment>
  );
};
