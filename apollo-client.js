import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://public8d905df4e330eb12.stepzen.net/api/illmannered-seahorse/__graphql",
    headers:{
        Authorization:`Apikey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`
    },
    cache: new InMemoryCache(),
});

export default client;