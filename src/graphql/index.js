import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './typeDefs'
import rootResolvers from './resolvers'

// merge all schemas and resolvers together to make a GraphQLSchemaInstance
// which can be used to mount GraphQL
const executableSchema = makeExecutableSchema({
  // all created schemas
  typeDefs: typeDefs,
  // all created resolvers
  resolvers: rootResolvers,
  // print errors to the server console that are usually swallowed by GraphQL
  logger: {
    log: (error) => console.log(error)
  }
})

// expose the GraphQLSchemaInstance to be used by the server
export default executableSchema
