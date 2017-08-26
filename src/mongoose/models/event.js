//
// Event model definition
//

import mongoose, { Schema } from 'mongoose'

import { UserSchema } from './user'

// describe the properties that will be in every event record
const EventSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required:  true
  },
  dateStart: String,
  dateEnd: String,
  address: {
    type: String,
    required: true
  },
  attendees: {
    type: [UserSchema],
    required: false,
    default: []
  },
  likes: {
    type: [UserSchema],
    required: false,
    default: []
  },
  subscribedUsers: {
    type: [UserSchema],
    required: false,
    default: []
  },
  volunteers: {
    type: [UserSchema],
    required: false,
    default: []
  }
}, { collection: "event" }) // use this schema in the collection named "event"

// using the event schema, create a model for events
const Event = mongoose.model('Event', EventSchema)

export {
  Event as default,
  EventSchema
}
