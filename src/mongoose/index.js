//
// Use Mongoose to connect to the MongoDB database
//

import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

// url to connect to database
const MONGODB_URL = 'mongodb://localhost:27017/EEJMC'

// connect to EEJMC MongoDB database using mongoose
// @NOTE make sure to install MongoDB
const db = mongoose.connect(MONGODB_URL, {
  useMongoClient: true
})

// use mongoose-auto-increment in the database to auto-increment ids
autoIncrement.initialize(db)

// handle database connection errors
db.on('error', () => {
  console.log(`Failed to connect mongoose to ${MONGODB_URL}`)
})

// handle successful database connection
db.once('open', () => {
  console.log(`Successfully connected mongoose to ${MONGODB_URL}`)
})
