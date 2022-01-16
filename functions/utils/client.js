import { GraphQLClient } from 'graphql-request'

let client = new GraphQLClient('https://graphql.us.fauna.com/graphql', {
  headers: {
    authorization: `Bearer ${process.env.FAUNADB_KEY}`,
  },
})

export function request() {}
