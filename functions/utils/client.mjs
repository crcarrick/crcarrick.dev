import { GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient('https://graphql.us.fauna.com/graphql', {
  headers: {
    authorization: `Bearer ${
      process.env.CONTEXT === 'dev' ? process.env.FAUNADB_DEV_SECRET : process.env.FAUNADB_SECRET
    }`,
  },
})
