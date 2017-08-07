//
// entry point for the server
//

import express from 'express'
// use express-graphql to interface with graphql
import expressGraphQL from 'express-graphql'

// run mongoose scripts to manage MongoDB database
import './mongoose'

// import models
import User from './mongoose/models/user'

// get schema and rootValue since they are needed to mount GraphQL
import schema from './graphql/schema'
import rootValue from './graphql/root-value'

// create a variable to represent "the server"
let app = express()

// use node environment specified port or default to 8050
const PORT = process.env.port || 8050

// mount GraphQL to http://localhost:8050/graphql
app.use('/graphql', expressGraphQL({
  schema: schema,
  rootValue: rootValue,
  graphiql: true,
  pretty: true
}))

//
// API routes
//

// define a POST route to create users
app.post('/users', (request, response) => {
  // create a user using the user model
  const newUser = new User({
    userId: 1,
    firstName: request.body.firstName,
    lastName: request.body.lastName
  })

  // save the new user to the database collection "user"
  newUser.save((error, result) => {
    // handle errors
    if (error) {
      response.send(error)
      console.log(`failed to save user ${newUser.firstName}`, error)
    }

    // send success confirmation
    response.send(result)
    console.log(`successfully saved user ${newUser.firstName} to the database collection`)
  })
})

// run the http server on port 8050
app.listen(PORT, (error) => {
  // throw an error if present
  if (error) throw error

  console.log(`Running a GraphQL API server on http://localhost:${PORT}`)
})
