import { GraphQLClient } from 'graphql-request'

const isDev = process.env.CONTEXT === 'dev'

export const client = new GraphQLClient(
  isDev ? 'http://localhost:8084' : 'https://graphql.us.fauna.com/graphql',
  {
    headers: {
      authorization: `Bearer ${
        isDev ? process.env.FAUNADB_LOCAL_SECRET : process.env.FAUNADB_SECRET
      }`,
    },
  }
)
