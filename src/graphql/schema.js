// construct database schematic using GraphQL's schema language

import { buildSchema } from 'graphql'

const schema = buildSchema(`
  # User schema
  type User {
    id: String
    firstName: String
    lastName: String
  }

  # Root Query
  type Query {
    user(id: String): User
  }
`)

export default schema
