import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();
const link = new HttpLink({
  //uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
uri: "http://3.10.35.206:1337/graphql",
//credentials: 'include',
//  fetchOptions: {
//    mode: 'no-cors',
//  },
//headers: {
//  "Content-Type": "application/graphql",
//  "Accept": "*/*",
//  "Accept-Encoding": "gzip, deflate, br"
//}
});

const client = new ApolloClient({
  cache,
  link,
});

export default client;
