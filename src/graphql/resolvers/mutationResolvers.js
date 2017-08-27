//
// define the resolvers for every mutation
//

import User from '../../mongoose/models/User'
import Event from '../../mongoose/models/Event'

const mutationResolvers = {
  // resolvers for all mutaitons
  RootMutation: {
    /** create a user using the User model */
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
        console.log('failed to save user: ', error)
      }
    },

    /** delete a user using the User model */
    deleteUser: async (parent, args, context) => {
      try {
        // delete one user that matches params
        const deletedUser = await User.deleteOne(args)

        // handle success
        console.log(`successfully deleted a user with id ${args._id}`)

        return deletedUser
      } catch (error) {
        // handle errors
        console.log('failed to delete user: ', error)
      }
    },

    /** create an event using the Event model */
    createEvent: async (parent, args, context) => {
      try {
        // save the new event to the collection
        const newEvent = await new Event(args).save()

        // stringify the id for MongoDB purposes
        newEvent.id = newEvent.id.toString()

        // handle success
        console.log(`successfully saved event ${newEvent.name} to the database collection`)

        return newEvent
      } catch (error) {
        // handle errors
        console.log('failed to save event: ', error)
      }
    },
  }
}

export default mutationResolvers
