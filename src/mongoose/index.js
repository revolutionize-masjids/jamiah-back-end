//
// Use Mongoose to connect to the MongoDB database
//

import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'
import bluebird from 'bluebird'

mongoose.Promise = bluebird

// url to connect to database
const MONGODB_URL = 'mongodb://localhost:27017/EEJMC'

const initializeMongoDB = async () => {
  try {
    // connect to EEJMC MongoDB database using mongoose. No need to `await` on
    // this, mongoose 4 handles connection buffering internally
    const db = mongoose.connect(MONGODB_URL, {
      useMongoClient: true
    })

    // handle database connection errors
    db.on('error', () => {
      console.log(`Failed to connect mongoose to ${MONGODB_URL}`)
    })

    // handle successful database connection
    db.once('open', () => {
      console.log(`Successfully connected mongoose to ${MONGODB_URL}`)
    })

    // use mongoose-auto-increment in the database to auto-increment ids
    autoIncrement.initialize(db)

    // reset the database
    await db.dropDatabase()
    console.log('successfully dropped all collections from the database')
  } catch (error) {
    console.log('error', error)
  }
}

initializeMongoDB()
