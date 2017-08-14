//
// define the resolvers for every query
//

import User from '../../mongoose/models/user'

const rootResolvers = {
  // resolvers for all queries
  RootQuery: {
    // get all created users
    allUsers: async (parent, args, context) => {
      // do a database query to search the collection for all Users
      const users = await User.find()

      // stringify ids for MongoDB purposes
      return users.map((x) => {
        x.id = x.id.toString()
        return x
      })
    },

    // get a specific user
    user: async (parent, args, context) => {
      // search the database for one user that fulfills arguments
      const user = await User.findOne(args)

      return user
    }
  },

  // resolvers for all mutaitons
  RootMutation: {
    // create a user using the User model
    createUser: async (parent, args, context) => {
      try {
        // save the new user to the collection
        const newUser = await new User(args).save()

        // stringify the id for MongoDB purposes
        newUser.id = newUser.id.toString()

        // handle success
        console.log(`successfully saved user ${newUser.firstName} to the database collection`)

        return newUser
      } catch (error) {
        // handle errors
        console.log('failed to save user', error)
      }
    }
  },

  // resolvers for all subscriptions
  RootSubscription: {}
}

export default rootResolvers
