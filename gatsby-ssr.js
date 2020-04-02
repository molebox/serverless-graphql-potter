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
        // uri: '/.netlify/functions/graphql',
        uri: 'https://serverless-graphql-potter.netlify.com/.netlify/functions/graphql',
        // fetchOptions: {
        //     mode: 'no-cors',
        //   }
    }),
    fetch
});

export const wrapRootElement = ({element}) => (
<ApolloProvider client={client}>{element}</ApolloProvider>
)