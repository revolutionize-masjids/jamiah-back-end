//
// User model definition
//

import mongoose, { Schema } from 'mongoose'

// describe the properties that will be in every user record
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true
<<<<<<< HEAD
  },
  password: {
    type: String,
    required: true
  },
=======
  }
  password: {
    type: String,
    required: true
  }
>>>>>>> f4fe847f7b205a16527c079e0d831988ade5b02e
  is_online: Boolean,
  reputation: Number
}, { collection: "user" }) // use this schema in the collection named "user"

// using the user schema, create a model for users
const User = mongoose.model('User', userSchema)

export default User
