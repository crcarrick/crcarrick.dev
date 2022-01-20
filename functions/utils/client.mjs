import { GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient('https://graphql.us.fauna.com/graphql', {
  headers: {
    authorization: `Bearer ${process.env.FAUNADB_SECRET}`,
  },
})
