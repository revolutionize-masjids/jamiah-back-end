// import mongoose and some specific modules
import mongoose, { Schema } from 'mongoose'

// create a schema for users
const userSchema = new Schema({
  // describe the properties in every user record
  userId: Number,
  firstName: String,
  lastName: String
}, { collection: "user" }) // use this schema in the collection named "user"

export default userSchema
