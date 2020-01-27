import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { data } from './data';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  resolvers: {

  },
});

cache.writeData({
  data,
});

window.cache = cache.optimisticData.data

export {
  client
}