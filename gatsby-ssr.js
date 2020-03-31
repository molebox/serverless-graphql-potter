const React = require('react');
const fetch =require('isomorphic-fetch');
const {
    ApolloProvider,
    ApolloClient,
    HttpLink,
    InMemoryCache
} = require('@apollo/client');

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'https://serverless-graphql-potter.netlify.com/.netlify/functions/graphql',
    }),
    fetch
});

export const wrapRootElement = ({element}) => (
<ApolloProvider client={client}>{element}</ApolloProvider>
)