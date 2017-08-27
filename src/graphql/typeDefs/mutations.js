// define top level mutation type that represents all possible mutations
const rootMutations = [`
  # Root Mutation: Allow clients to create, update, and delete records
  type RootMutation {
    # create a user
    createUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      reputation: Int
    ): User!

    # update a user
    updateUser(
      _id: ID!
      is_online: Boolean
      firstName: String
      lastName: String
      email: String
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
      name: String!
      description: String!,
      dateStart: String,
      dateEnd: String,
      address: String!
    ): Event!

    # add a comment to an event
    addCommentToEvent(
      # the id of the event being updated
      _id: ID!

      # the main content of the comment
      body: String!
    ): Event!

  }
`]

export default rootMutations
