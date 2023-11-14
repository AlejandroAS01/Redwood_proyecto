import React from 'react'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://192.168.1.133:8911/graphql',
  cache: new InMemoryCache(),
})

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApiProvider
