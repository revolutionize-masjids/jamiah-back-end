//
// User model definition
//

import mongoose, { Schema } from 'mongoose'

// describe the properties that will be in every user record
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  is_online: Boolean,
  reputation: Number
}, { collection: "user" }) // use this schema in the collection named "user"

// using the user schema, create a model for users
const User = mongoose.model('User', userSchema)

export default User
