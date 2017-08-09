// construct database schematic using GraphQL's shorthand schema notation
// learn GraphQL shorthand notation : https://wehavefaces.net/graphql-shorthand-notation-cheatsheet-17cd715861b6

import { buildSchema } from 'graphql'

/** GraphQL schemas expressed in shorthand notation */
const schema = buildSchema(`
  # Custom scalar representing urls
  scalar Url

  # Custom scalar representing date & time
  scalar Time

  # Profile avatar
  type Avatar {
    imageUrl: Url
  }

  # Any person
  interface Person {
    id: ID!
    firstName: String
    lastName: String
    is_online: Boolean
    lastOnline: Time
    avatar: Avatar
  }

  # Normal users
  type User implements Person {
    id: ID!
    firstName: String
    lastName: String
    is_online: Boolean
    lastOnline: Time
    avatar: Avatar
    reputation: Int
  }

  # People who like banning
  type Moderator implements Person {
    id: ID!
    firstName: String
    lastName: String
    is_online: Boolean
    lastOnline: Time
    avatar: Avatar
    usersBanned: [User]!
  }

  # User-submitted message enclosed into a block containing the user's details and the date and time it was submitted contained in Threads
  type Post {
    poster: User
    message: String
    whenPosted: Time
    upvotes: Int
    downvotes: Int
  }

  # A collection of posts
  interface Thread {
    title: String
    description: String
    originalPoster: User
    whenCreated: Time
    is_anonymous: Boolean
    replies: [Post]!
  }

  # Questions asked to the Imaam
  type ImamQuestion {
    questioner: User
    is_answered: Boolean
  }

  # The imam of the masjid
  type Imam implements Person {
    id: ID!
    firstName: String
    lastName: String
    is_online: Boolean
    lastOnline: Time
    avatar: Avatar
    questions: [ImamQuestion]!
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
