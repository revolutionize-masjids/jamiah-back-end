//
// Use Mongoose to connect to the MongoDB database
//

import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

// url to connect to database
const mongoDbRoute = 'mongodb://localhost:27017/EEJMC'

// connect to EEJMC MongoDB database using mongoose
// @NOTE make sure to install MongoDB
const databasePromise = mongoose.connect(mongoDbRoute, {
  useMongoClient: true
})

// use mongoose-auto-increment in the database to auto-increment ids
autoIncrement.initialize(databasePromise)

// handle database connection errors
databasePromise.on('error', () => {
  console.log(`Failed to connect mongoose to ${mongoDbRoute}`)
})

// handle successful database connection
databasePromise.once('open', () => {
  console.log(`Successfully connected mongoose to ${mongoDbRoute}`)
})
