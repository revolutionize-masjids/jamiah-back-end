// define top level mutation type that represents all possible mutations
const rootMutations = [`
  # Root Mutation: Allow clients to create, update, and delete records
  type RootMutation {
    # create an account
    createAccount(firstName: String!, lastName: String!): Account!

    # update an account
    updateAccount(id: ID!, is_online: Boolean!): Account!

    # delete an account
    delete(id: ID!): Account!
  }
`]

export default rootMutations
