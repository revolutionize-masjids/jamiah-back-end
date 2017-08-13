import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './typeDefs'
import rootResolvers from './resolvers'

// merge all type definitions and resolvers together to make a
// GraphQLSchemaInstance to create the GraphQL service
const executableSchema = makeExecutableSchema({
  // all the type definitions
  typeDefs: typeDefs,
  // all created resolvers
  rootResolvers,
  // print errors to the server console that are usually swallowed by GraphQL
  logger: {
    log: (error) => console.log(error)
  }
})

// expose the GraphQLSchemaInstance to be used by the server
export default executableSchema
