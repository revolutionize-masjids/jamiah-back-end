// define the resolvers for every query
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
  Mutation:{
    createUser: async (parent, args,{ User }) => {
      const user = await new User(args).save();
        user.id = user.id.toString();
        return user;
      })
    },
  };  
