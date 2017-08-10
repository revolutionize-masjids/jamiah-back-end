//
// entry point for the server
//

// use express to create the http server
import express from 'express'
// use body-parser to access HTTP request bodies and the data they contain
import bodyParser from 'body-parser'
// use express-graphql to interface with graphql
import expressGraphQL from 'express-graphql'

// run mongoose scripts to manage MongoDB database
import './mongoose'

// get schema and rootValue since they are needed to mount GraphQL
import schema from './graphql/schema'

// get the defined API routes
import apiRoutes from './actions/user'

// create a variable to represent "the server"
let app = express()

// use node environment specified port or default to 8050
const PORT = process.env.port || 8050

// make the api ONLY accept HTTP requests in the form of JSON
// parse the request's data chunks into a use-able body
app.use(bodyParser.json({ type: 'application/json' }))

// use the defined API routes
app.use(apiRoutes)

// mount GraphQL to http://localhost:8050/graphql
app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true,
  pretty: true
}))

// run the http server on port 8050
app.listen(PORT, (error) => {
  // throw an error if present
  if (error) throw error

  console.log(`Running a GraphQL API server on http://localhost:${PORT}`)
})
