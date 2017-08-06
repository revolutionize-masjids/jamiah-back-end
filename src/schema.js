// construct database schematic using GraphQL's schema language

import { buildSchema } from 'graphql'

export default const schema = buildSchema(`
  type Query {
    firstName: String,
    lastName: String
  }
`)
