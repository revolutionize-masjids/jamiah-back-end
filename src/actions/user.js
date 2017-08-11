//
// API routes
//

// use a router to make use of the express server instance in different files outside of // index.js for "seperation of concerns"
import express from 'express'
const Router = express.Router()
import assert from 'assert'

// import models
import User from '../mongoose/models/user'

// define a POST route to create users
Router.post('/users', (request, response) => {
  // validate request
  assert(request.body.firstName, 'firstName is invalid')
  assert(request.body.lastName, 'lastName is invalid')

  // create a user using the user model
  const newUser = new User({
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

export default Router
