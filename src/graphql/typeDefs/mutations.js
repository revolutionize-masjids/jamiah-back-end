// define top level mutation type that represents all possible mutations
const rootMutations = [`
  # Root Mutation: Allow clients to create, update, and delete records
  type RootMutation {
    # create a user
    createUser(
      # the user's first name
      firstName: String!

      # the user's last name
      lastName: String!

      # the user's internal email
      email: String!

      # the user's password
      password: String!
    ): User!

    # update a user
    updateUser(
      # the unique id of the user
      _id: ID!

      # whether the user is online
      is_online: Boolean

      # the user's first name
      firstName: String

      # the user's last name
      lastName: String

      # the user's internal email
      email: String

      # how many likes a user has gotten
      reputation: Int
    ): User!

    # delete a user
    deleteUser(
      # the id of the user to delete
      _id: ID!,

      # the email of the user to delete
      email: String
    ): User!

    # create an event
    createEvent(
      # what the event is called
      name: String!

      # the body text describing the event
      description: String!,

      # the date & time the event starts
      dateStart: String,

      # the date & time the event ends
      dateEnd: String,

      # where the event is being held
      address: String!
    ): Event!

    # add a comment to an event
    addCommentToEvent(
      # the id of the event being updated
      eventId: ID!

      # the main content of the comment
      body: String!
    ): EventComment!

  }
`]

export default rootMutations
