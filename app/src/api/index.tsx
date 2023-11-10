import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';



const client = new ApolloClient({
  uri: 'http://localhost:8911/graphql',
  cache: new InMemoryCache(),
});

export const ApiProvider = ({children})=>{
  return(
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    )
}

export default ApiProvider


