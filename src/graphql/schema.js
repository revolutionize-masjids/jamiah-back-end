// construct database schematic using GraphQL's shorthand schema notation
// learn GraphQL shorthand notation:
// wehavefaces.net/graphql-shorthand-notation-cheatsheet-17cd715861b6

import rootMutations from './mutations'
import rootQueries from './queries'
import rootSubscriptions from './subscriptions'

/** GraphQL schemas expressed in shorthand notation */
const rootSchema = [`
  # Custom scalar representing urls
  scalar Url

  # Custom scalar representing date & time
  scalar Time

  # Profile avatar
  type Avatar {
    # the url to the avatar image
    imageUrl: Url!
  }

  # Registered account
  interface Account {
    # unique id
    id: ID!

    # first name of account user
    firstName: String

    # last name of account user
    lastName: String

    # whether the account user is online
    is_online: Boolean!

    # the last time the account user logged in to the app
    lastOnline: Time!

    # the avatar of the user
    avatar: Avatar
  }

  # Default user
  type User implements Account {
    # unique id
    id: ID!

    # first name of account user
    firstName: String

    # last name of account user
    lastName: String

    # whether the account user is online
    is_online: Boolean!

    # the last time the account user logged in to the app
    lastOnline: Time!

    # the avatar of the user
    avatar: Avatar

    # all the questions the user asked to the imam
    imamQuestions: [ImamQuestion]!

    # how much forum reputation this user has
    reputation: Int

    # all the threads this user is subscribed to
    bookmarks: [Bookmark]!
  }

  # People who like banning
  type Moderator implements Account {
    id: ID!
    firstName: String
    lastName: String
    is_online: Boolean!
    lastOnline: Time!
    avatar: Avatar
    usersBanned: [User]!
  }

  # User-submitted message enclosed into a block containing the user's details and the date and time it was submitted contained in Threads
  type Post {
    poster: User!
    message: String!
    whenSubmitted: Time!
    upvotes: Int!
    downvotes: Int!
  }

  # Collection of posts
  interface Thread {
    title: String
    description: String
    originalPoster: User!
    whenSubmitted: Time!
    is_anonymous: Boolean
    replies: [Post]!
    lastUpdated: Time
  }

  # Question asked to the Imaam
  type ImamQuestion implements Thread {
    title: String
    description: String
    originalPoster: User!
    whenSubmitted: Time!
    is_anonymous: Boolean
    replies: [Post]!
    lastUpdated: Time
    is_answered: Boolean
  }

  # The imam of the masjid
  type Imam implements Account {
    id: ID!
    firstName: String
    lastName: String
    is_online: Boolean!
    lastOnline: Time!
    avatar: Avatar
    questions: [ImamQuestion]!
  }

  # Thread that a user is subscribed to / following
  type Bookmark {
    subscribedThread: Thread!
    lastRead: Time!
    # Whether the user who owns the bookmark has read all of thread's updates
    is_read: Boolean!
  }

  # Schema configuration
  schema {
    query: RootQuery
    mutation: RootMutation
    subscription: RootSubscription
  }
`]

// put schema together into one array of schema strings
const schema = [...rootSchema, ...rootQueries, ...rootMutations,
  ...rootSubscriptions]

export default schema
