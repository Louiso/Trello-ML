import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  resolvers: { /* ... */ },
});

cache.writeData({
  data: {
    todos: [],
    visibilityFilter: 'SHOW_ALL',
    networkStatus: {
      __typename: 'NetworkStatus',
      isConnected: false,
    },
  },
});

export {
  client
}