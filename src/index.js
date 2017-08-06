import express from 'express'
import expressGraphQL from 'express-graphql'

// get schema since its needed to mount GraphQL
import schema from './schema'

let app = express()

// use node environment specified port or default to 8050
const PORT = process.env.port || 8050

// mount GraphQL to http://localhost:8050/graphql
app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true,
  pretty: true
}))

// run the http server on port 8050
app.listen(PORT, (error) => {
  if (error) throw error

  console.log(`http server running on http://localhost:${PORT}`)
})
