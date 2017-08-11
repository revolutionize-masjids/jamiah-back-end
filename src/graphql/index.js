import { makeExecutableSchema } from 'graphql-tools';

import rootSchema from './schema'
import rootResolvers from './resolvers'

// merge all schemas and resolvers together to make a GraphQLSchemaInstance
const executableSchema = makeExecutableSchema({
  // all created schemas
  typeDefs: rootSchema,
  // all created resolvers
  resolvers: rootResolvers
})

// expose the GraphQLSchemaInstance to be used by the server
export default executableSchema
