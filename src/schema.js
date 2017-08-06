// construct database schematic using GraphQL's schema language

import { buildSchema } from 'graphql'

const schema = buildSchema(`
  type Query {
    firstName: String,
    lastName: String
  }
`)

export default schema
