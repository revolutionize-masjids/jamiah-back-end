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

  # A registered account
  interface Account {
    id: ID!
    firstName: String
    lastName: String
    is_online: Boolean
    lastOnline: Time
    avatar: Avatar
  }

  # Default member/account/user
  type User implements Account {
    id: ID!
    firstName: String
    lastName: String
    is_online: Boolean
    lastOnline: Time
    avatar: Avatar
    reputation: Int
  }

  # People who like banning
  type Moderator implements Account {
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
    whenSubmitted: Time
    upvotes: Int
    downvotes: Int
  }

  # A collection of posts
  interface Thread {
    title: String
    description: String
    originalPoster: User
    whenSubmitted: Time
    is_anonymous: Boolean
    replies: [Post]!
  }

  # Questions asked to the Imaam
  type ImamQuestion implements Thread {
    title: String
    description: String
    originalPoster: User
    whenSubmitted: Time
    is_anonymous: Boolean
    replies: [Post]!
    is_answered: Boolean
  }

  # The imam of the masjid
  type Imam implements Account {
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

  # Schema configuration
  schema {
    query: Root
  }
`)

export default schema
