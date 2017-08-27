//
// EventComment model definition
//

import mongoose, { Schema } from 'mongoose'

import { UserSchema } from './User'
import { EventSchema } from './Event'

// describe the properties that will be in every comment record
const EventCommentSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  commenter: {
    type: UserSchema,
    required:  true,
    default: {
      firstName: "Rameez",
      lastName: "Arif",
      email: "rameez.arif@gmail.com",
      password: "rameezIsCool123",
      is_online: true,
      reputation: 523
    }
  },
  created: {
    type: String,
    required: true,
    default: Date.now()
  },
  lastUpdated: {
    type: String,
    required: false,
    default: null
  },
  likes: {
    type: [UserSchema],
    required: false,
    default: []
  },
  // TODO: create a reference to the event this comment is attached to
  // event: {
  //   type: EventSchema,
  //   required: false,
  //   default: {}
  // }
}, { collection: "comment" }) // use this schema in the collection named "comment"

// using the comment schema, create a model for comments
const EventComment = mongoose.model('EventComment', EventCommentSchema)

export {
  EventComment as default,
  EventCommentSchema
}
