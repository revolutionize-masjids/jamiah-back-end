//
// Use Mongoose to connect to the MongoDB database
//

import mongoose from 'mongoose'
import bluebird from 'bluebird'
import config from '../config'

mongoose.Promise = bluebird

const initializeMongoDB = async () => {
  try {
    // connect to the MongoDB database
    const db = mongoose.connect(config.database, {
      useMongoClient: true
    })

    // handle database connection errors
    db.on('error', () => {
      console.log(`Failed to connect mongoose to ${config.database}`)
    })

    // handle successful database connection
    db.once('open', () => {
      console.log(`Successfully connected mongoose to ${config.database}`)
    })
  } catch (error) {
    // handle general errors
    console.log('error', error)
  }
}

initializeMongoDB()
