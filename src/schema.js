// construct a schema using the GraphQL schema language
// define query responses, mutations, etc.

import { buildSchema } from 'graphql'

// define database schematic to be used by GraphQL
const schema = buildSchema(`
  type Query {
    name: String
  }
`)

export default schema
