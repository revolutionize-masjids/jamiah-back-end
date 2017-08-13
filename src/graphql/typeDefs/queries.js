// define top level mutation type that represents all possible queries
const rootQueries = [`
  # Root Query: Allow clients to read records
  type RootQuery {
    # get current user
    me: User

    # get all users
    allUsers: [User]!

    # get a user
    user(
      # user's first name
      firstName: String
    ): User
  }
`]

export default rootQueries
