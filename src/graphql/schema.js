// construct database schematic using GraphQL's schema language

import { buildSchema } from 'graphql'

/** GraphQL schema expressed in shorthand notation */
const schema = buildSchema(`
  interface Person {
    id: ID!
    firstName: String
    lastName: String
    is_online: Boolean
  }

  # Schema for all users
  type User implements Person {
    id: ID!
    firstName: String
    lastName: String
    is_online: Boolean
    reputation: Int
  }

  # Schema for moderators
  type Moderator implements Person {
    id: ID!
    firstName: String
    lastName: String
    is_online: Boolean
    usersBanned: [User]!
  }

  # Root Query
  type Root {
    me: User
  }

  # schema configuration
  schema {
    query: Root
  }
`)

export default schema
