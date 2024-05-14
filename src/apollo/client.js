import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    // uri: 'https://flyby-router-demo.herokuapp.com/',
    // uri: 'https://graphqlzero.almansi.me/api',
    uri: 'https://graphql-pokemon2.vercel.app',
    cache: new InMemoryCache(),
});


export default client;