//
// User model
//

// import mongoose and some specific modules
import mongoose, { Schema } from 'mongoose'

// create a schema for users
const userSchema = new Schema({
  // describe the properties that will be in every user record
  userId: Number,
  firstName: String,
  lastName: String
}, { collection: "user" }) // use this schema in the collection named "user"

// using the user schema, create a model for users
const userModel = mongoose.model('User', userSchema)

export default userModel
