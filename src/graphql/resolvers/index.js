//
// define the resolvers for every query
//

import User from '../../mongoose/models/user'

const rootResolvers = {
  // resolvers for all queries
  RootQuery: {
    allUsers: async (parent, args, context) => {
      // {id: 11221, name:"blah blah"}
      const users = await User.find()
      return users.map((x) => {
        x.id = x.id.toString()
        return x
      })
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
