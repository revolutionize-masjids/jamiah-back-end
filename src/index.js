import http from 'http';
import express from 'express';
import expressGraphQL from 'express-graphql'
import { buildSchema } from 'graphql'
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import initializeDb from './db';
import middleware from './middleware';
import api from './api';
import config from './config.json';

let app = express();

// construct a Schema using the GraphQL schema language
var userSchema = buildSchema(`
  type Query {
    name: String
  }
`)

// create a GraphQL resolver function for each API endpoint
var root = {
  name: () => {
    return 'Abdullah'
  }
}

// mount GraphQL to 'localhost:8050/graphql' with a schema and the GraphiQL IDE
app.use('/graphql', expressGraphQL({
  schema: userSchema,
  rootValue: root,
  graphiql: true
}))

app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

// connect to db
initializeDb( db => {

	// internal middleware
	app.use(middleware({ config, db }));

	// api router
	app.use('/api', api({ config, db }));

	app.server.listen(process.env.PORT || config.port, () => {
		console.log(`Started on port ${app.server.address().port}`);
	});
});

export default app;
