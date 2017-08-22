// define secret configuration for development vs. production

const config = {
  production: {
    // remote mlabs database
    database: 'mongodb://general-user:user123@ds145010.mlab.com:45010/eejmc',
  },
  development: {
    // NOTE: make sure to have MongoDB running locally
    database: 'mongodb://127.0.0.1:27017/EEJMC',
  }
}

// use the configuration according to the environment (dev vs. production)
export default config[process.env.NODE_ENV]
