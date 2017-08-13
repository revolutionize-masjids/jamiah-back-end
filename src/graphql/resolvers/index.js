// define the resolvers for every query
import rootMutations from './mutations'
import rootQueries from './queries'

const rootResolvers = {
  RootQuery:{
    allusers: async (parent, args,{ User }) => {
      // {id: 11221, name:"blah blah"}
      const users = await User.find();
      return users.map((x) => {
        x.id = x.id.toString();
        return x;
      })
    },
  };
  RootMutation:{
    createUser: async (parent, args,{ User }) => {
      const user = await new User(args).save();
        user.id = user.id.toString();
        return user;
    },
  },
};

export default rootResolvers
