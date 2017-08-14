//
// define the resolvers for every query
//

import User from '../../mongoose/models/user'

const rootResolvers = {
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
    },
    // delete a user using the User model
    deleteUser: async (parent, args, context) => {
      try {
        // delete one user that matches params
        const deletedUser = await User.deleteOne(args)

        // handle success
        console.log(`successfully deleted a user with id ${args._id}`)

        return deletedUser
      } catch (error) {
        // handle errors
        console.log('failed to delete user', error)
      }
    }
  },
  // resolvers for all subscriptions
  RootSubscription: {}
}

export default rootResolvers
