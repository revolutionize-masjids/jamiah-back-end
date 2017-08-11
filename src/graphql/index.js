import { makeExecutableSchema } from 'graphql-tools';
import rootSchema from './schema'

// merge all schemas and resolvers together to make a GraphQLSchemaInstance
const executableSchema = makeExecutableSchema({
  // all created schemas
  typeDefs: rootSchema,
  // all created resolvers
  resolvers: {}
})

// expose the GraphQLSchemaInstance to be used by the server
export default executableSchema
