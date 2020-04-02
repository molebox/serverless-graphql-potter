const {ApolloServer} = require('apollo-server-lambda');
const { resolvers } = require('./resolvers');
const { typeDefs } = require('./schema');
const { client, query } = require('./db');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({event}) => {
        console.log({event})
        // return {client, query};
        return {client, query, headers: event.headers};
    },
    playground: true,
    introspection: true
});

// exports.handler = server.createHandler();

exports.handler = server.createHandler({
    cors: {
        origin: "*",
        // origin: [
        //     'https://serverless-graphql-potter.netlify.com',
        //     'http://serverless-graphql-potter.netlify.com',
        //     'http://localhost',
        // ],
        credentials: true
    }
});