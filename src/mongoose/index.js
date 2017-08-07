import mongoose from 'mongoose'

import userSchema from './models/user'

// url to connect to database
const mongoDbRoute = 'mongodb://localhost:27017/local'

// connect to local MongoDB database using mongoose
// @NOTE make sure to install MongoDB
const databasePromise = mongoose.connect(mongoDbRoute, {
  useMongoClient: true
})

// handle database connection errors
databasePromise.on('error', () => {
  console.log(`Failed to connect mongoose to ${mongoDbRoute}`)
})

// handle successful database connection
databasePromise.once('open', () => {
  console.log(`Successfully connected mongoose to ${mongoDbRoute}`)
})
