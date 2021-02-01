import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { withApollo } from "next-with-apollo";
import { createHttpLink } from "apollo-link-http";
import fetch from 'isomorphic-unfetch'

const GRAPH_API = 'http://localhost:1337';

const link = createHttpLink({
    fetch,
    uri: `${GRAPH_API}/graphql`
})

export default withApollo((initState: any) => new ApolloClient({
    link: link,
    cache: new InMemoryCache().restore(initState || {})
}))