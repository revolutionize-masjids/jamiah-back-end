//
// define the resolvers for every query
//

import User from '../../mongoose/models/User'
import Event from '../../mongoose/models/Event'

const queryResolvers = {
  // resolvers for all queries
  RootQuery: {
    // get a specific user
    user: async (parent, args, context) => {
      try {
        // search the database for one user that fulfills arguments
        const user = await User.findOne(args)

        // handle success
        console.log(`successfully queried ${user.firstName} ${user.lastName}`)

        return user
      } catch (error) {
        // handle errors
        // try to give first name debugging info if available
        if (args.firstName) {
          console.log(`failed to query ${args.firstName}`)
        }

        console.log('failed to query user')
      }
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
      return await User.find()
    },

    // get all created events
    allEvents: async (parent, args, context) => {
      // do a database query to search the collection for all Events
      return await Event.find()
    }
  },
}

export default queryResolvers
