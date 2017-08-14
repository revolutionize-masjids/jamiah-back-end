//
// define the resolvers for every query
//

import User from '../../mongoose/models/user'

const queryResolvers = {
  // resolvers for all queries
  RootQuery: {
    // get a specific user
    user: async (parent, args, context) => {
      // search the database for one user that fulfills arguments
      const user = await User.findOne(args)

      return user
    },

    // get all users that match filter parameters
    users: async (parent, args, context) => {
      // do a database query to search for all users that match those filters
      const users = await User.find(args)

      return users
    },

    // get all created users
    allUsers: async (parent, args, context) => {
      // do a database query to search the collection for all Users
      const users = await User.find()

      // stringify ids for MongoDB purposes
      return users.map((x) => {
        x.id = x.id.toString()
        return x
      })
    }
}

export default queryResolvers
