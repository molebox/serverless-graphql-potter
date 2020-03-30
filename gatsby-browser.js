import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import fetch from "isomorphic-fetch";

const client = new ApolloClient({
  uri: `/.netlify/functions/graphql`,
  fetch
});

export const wrapRootElement = ({ element }) => (
    <ApolloProvider client={client}>{element}</ApolloProvider>
  );