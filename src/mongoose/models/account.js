//
// Account model definition
//

import mongoose, { Schema } from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

// describe the properties that will be in every account record
const accountSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  firstName: String,
  lastName: String,
  is_online: Boolean,
  lastOnline: String,
  avatar: String
}, { collection: "Account" }) // use this schema in the collection named "account"

// TODO: find a better way to add in a plugin since this is deprecated.
// Find better solution, possibly coding it ourselves.
// use the mongoose-auto-increment library to autoincrement accountId
accountSchema.plugin(autoIncrement.plugin, 'Account')

// using the account schema, create a model for accounts
const Account = mongoose.model('Account', accountSchema)

export default Account
