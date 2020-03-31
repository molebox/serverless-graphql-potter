const {ApolloServer} = require('apollo-server-lambda');
const { resolvers } = require('./resolvers');
const { typeDefs } = require('./schema');
const { client, query } = require('./db');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: function() {
        return {client, query};
    },
    playground: true,
    introspection: true
});

exports.handler = server.createHandler({
    cors: {
        origin: [
            'https://serverless-graphql-potter.netlify.com',
            'http://serverless-graphql-potter.netlify.com',
            'http://localhost'
        ],
        credentials: true
    }
});