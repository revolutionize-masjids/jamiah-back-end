//
// entry point for the server
//

import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import cors from 'cors'

// run mongoose scripts to manage MongoDB database
import './mongoose'

// get type defs and rootValue since they are needed to mount GraphQL
import executableSchema from './graphql'

// create an object that represents "the server"
let app = express()

// use node environment specified port or default to 8091
const PORT = process.env.port || 8091

// use apollo-server-express to interface with GraphQL and mount GraphQL to
// CORS-enabled http://localhost:8091/graphql
// make the api ONLY accept HTTP requests in the form of JSON. use body-parser
// to access request bodies by parsing its data chunks
// bodyParser is only needed for POSTs
app.use('/graphql', bodyParser.json(), cors(), graphqlExpress({
  schema: executableSchema,
}))

// mount graphiql
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

// run a graphql api http server on port 8091
let server = app.listen(PORT, (error) => {
  // handle errors
  if (error) throw error

  console.log(`GraphQL API now running on http://localhost:${PORT}/graphql`)
})
