const React = require ('react');
const {ApolloProvider, ApolloClient, HttpLink, InMemoryCache} = require('@apollo/client');
// import fetch from "isomorphic-fetch";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: `/.netlify/functions/graphql`,
    })
});

export const wrapRootElement = ({element}) => (
<ApolloProvider client={client}>{element}</ApolloProvider>
)