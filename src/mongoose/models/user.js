//
// User model definition
//

import mongoose, { Schema } from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

// create a schema for users which describes the properties that will be in every user record
const userSchema = new Schema({
  userId: { type: Schema.Types.ObjectId },
  firstName: String,
  lastName: String
}, { collection: "user" }) // use this schema in the collection named "user"

// TODO: find a better way to add in a plugin. This is deprecated. Find better solution, possibly coding it ourselves
// use the mongoose-auto-increment library to autoincrement userId
userSchema.plugin(autoIncrement.plugin, 'User')

// using the user schema, create a model for users
const User = mongoose.model('User', userSchema)

export default User
