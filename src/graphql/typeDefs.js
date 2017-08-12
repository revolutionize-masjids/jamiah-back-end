// prepare the typedefs, as needed to create an executable schema

import rootMutations from './mutations'
import rootQueries from './queries'
import rootSubscriptions from './subscriptions'
import rootSchema from './schema'

// put all schema definitions together into one array of schema strings
const typeDefs = [...rootSchema, ...rootQueries, ...rootMutations,
  ...rootSubscriptions]

export default typeDefs
