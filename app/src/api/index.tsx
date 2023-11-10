import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://192.168.133:8910/.netlify/functions/graphql',
  cache: new InMemoryCache(),
});

export const ApiProvider = ({children}: {children:React.ReactNode})=>{
  return(
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    )
}

export default ApiProvider


