import React from 'react'

import { pickBy } from 'lodash'
import { matchSorter } from 'match-sorter'

import { Tag } from '~/components/Tag'

import * as S from './Filter.style'

const combineQueries = ({ textQuery, tagsQuery }) => {
  const activeTags = Object.keys(pickBy(tagsQuery, Boolean))

  return textQuery ? [...activeTags, textQuery] : activeTags
}

const resultsFromQuery = ({ list, query }) => {
  if (!query.length) return list

  return query.reduceRight(
    (results, term) =>
      matchSorter(results, term, {
        keys: ['frontmatter.title', 'frontmatter.tags'],
      }),
    list
  )
}

const uniqueTagsFromPosts = ({ posts }) =>
  posts
    .flatMap((post) => post.frontmatter.tags)
    .reduce((tags, tag) => ({ ...tags, [tag]: false }), {})

export const Filter = ({ children, posts }) => {
  const tags = React.useMemo(() => uniqueTagsFromPosts({ posts }), [posts])

  const [textQuery, setTextQuery] = React.useState('')
  const [tagsQuery, setTagsQuery] = React.useState(tags)

  const handleTextInput = ({ target: { value } }) => setTextQuery(value)
  const handleTagsClick = (tag) => setTagsQuery((tq) => ({ ...tq, [tag]: !tq[tag] }))

  const query = React.useMemo(
    () => combineQueries({ textQuery, tagsQuery }),
    [textQuery, tagsQuery]
  )
  const results = React.useMemo(() => resultsFromQuery({ list: posts, query }), [posts, query])

  return (
    <React.Fragment>
      <S.Input type="search" placeholder="search..." onChange={handleTextInput} value={textQuery} />
      <S.Tags>
        {Object.entries(tagsQuery).map(([tag, isActive]) => (
          <Tag variant="button" key={tag} isActive={isActive} onClick={() => handleTagsClick(tag)}>
            {tag}
          </Tag>
        ))}
      </S.Tags>

      {results.length > 0 && children({ results })}
    </React.Fragment>
  )
}
