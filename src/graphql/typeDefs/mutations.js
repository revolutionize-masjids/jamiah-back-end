// define top level mutation type that represents all possible mutations
const rootMutations = [`
  # Root Mutation: Allow clients to create, update, and delete records
  type RootMutation {
    # create a user
    createUser(firstName: String!, lastName: String!): User!

    # update a user
    updateUser(id: ID!, is_online: Boolean!): User!

    # delete a user
    delete(id: ID!): User!
  }
`]

export default rootMutations
