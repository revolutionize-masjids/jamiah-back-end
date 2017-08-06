import express from 'express'
import expressGraphQL from 'express-graphql'

// get schema
import schema from './schema'

app = express()

// mount GraphQL to http://localhost:8050/graphql
app.use('/graphql', expressGraphQL((request, response) => {
  schema: schema,
  graphiql: true,
  pretty: true
}))

app.listen(8050, (error) => {
  if (error) throw error

  console.log(`http server running on http://localhost:8050`)
})
