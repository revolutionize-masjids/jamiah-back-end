// define top level mutation type that represents all possible queries
const rootQueries = [`
  # Root Query: Allow clients to read records
  type RootQuery {
    # get a user
    user(
      # the user's unique id
      _id: ID

      # the user's first name
      firstName: String

      # the user's last name
      lastName: String

      # the user's internal email
      email: String
    ): User

    # get all users that match filter parameters
    users(
      # the user's first name
      firstName: String

      # the user's last name
      lastName: String

      # the user's internal email
      email: String

      # whether the user is online
      is_online: Boolean
    ): [User]

    # get every existing user
    allUsers: [User]!

    # get a specific event
    event(
      # the unique id of the event
      _id: ID

      # what the event is called
      name: String
    ): Event

    # get all the events
    allEvents: [Event]!
  }
`]

export default rootQueries
