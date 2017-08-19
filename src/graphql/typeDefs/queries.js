// define top level mutation type that represents all possible queries
const rootQueries = [`
  # Root Query: Allow clients to read records
  type RootQuery {
    # get a user
    user(
      _id: ID
      firstName: String
      lastName: String
      email: String
    ): User

    # get all users that match filter parameters
    users(
      firstName: String
      lastName: String
      email: String
      is_online: Boolean
    ): [User]

    # get every existing user
    allUsers: [User]!
  }
`]

export default rootQueries
