//
// define the resolvers for every query
//

import User from '../../mongoose/models/user'

const mutationResolvers = {
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
  }
}

export default mutationResolvers
