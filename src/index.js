import express from 'express'
import expressGraphQL from 'express-graphql'

// run mongoose scripts to manage MongoDB database
import './mongoose'

// get schema since its needed to mount GraphQL
import schema from './graphql/schema'
import fakeDatabase from './fakeDatabase'

let app = express()

// use node environment specified port or default to 8050
const PORT = process.env.port || 8050

// define GraphQL root value
const rootValue = {
  user: function ({id}) {
    return fakeDatabase[id]
  }
}

// mount GraphQL to http://localhost:8050/graphql
app.use('/graphql', expressGraphQL({
  schema: schema,
  rootValue: rootValue,
  graphiql: true,
  pretty: true
}))

// run the http server on port 8050
app.listen(PORT, (error) => {
  // throw an error if present
  if (error) throw error

  console.log(`Running a GraphQL API server on http://localhost:${PORT}`)
})
