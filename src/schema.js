// construct database schematic using GraphQL's schema language

import { buildSchema } from 'graphql'

import queries from './queries'

const schema = buildSchema(`
  # User schema
  type User {
    id: String
    name: String
  }

  # Root Query
  type Query {
    user(id: String): User
  }
`)

export default schema
