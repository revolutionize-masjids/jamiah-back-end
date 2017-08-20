// var config = require('./config.js').get(process.env.NODE_ENV);

const config = {
  production: {
    database: 'mongodb://general-user:user123@ds145010.mlab.com:45010/eejmc',
  },
  development: {
    database: 'mongodb://127.0.0.1:27017/EEJMC',
  }
}

// use the configuration according to the environment (dev vs. production)
export default config[process.env.NODE_ENV]
