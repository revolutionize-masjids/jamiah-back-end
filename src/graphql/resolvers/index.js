import User from '../../mongoose/models/user'

// define the resolvers for every query
import User from '../mongoose/models/user'

const rootResolvers = {
  RootQuery: {
    allUsers: async (parent, args, { User }) => {
      // {id: 11221, name:"blah blah"}
      const users = await User.find()
      return users.map((x) => {
        x.id = x.id.toString()
        return x;
      });
    },
  }

  RootMutation: {
    // create a user using the User model
    createUser: async (parent, {firstName, lastName}, context) => {
      try {
        // save the new user to the collection
        const newUser = await new User(args).save()
        // stringify the id for MongoDB purposes
        newUser.id = newUser.id.toString()

        console.log(`successfully saved user ${newUser.firstName} to the database collection`)

        return newUser
      } catch (error) {
        // handle errors
        console.log(`failed to save user ${newUser.firstName}`, error)
      }
    },
  },

  RootSubscription: {}
}

export default rootResolvers
