import { createApp, h, provide } from "vue";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from "@apollo/client/core";
import { ApolloClients } from "@vue/apollo-composable";
import App from "./App.vue";
import router from "./router";
import { StorageService } from "@/shared/services/storage-service";
import { setContext } from "@apollo/client/link/context";

const storageSrv = new StorageService();

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql"
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = storageSrv.getApiToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const app = createApp({
  setup() {
    provide(ApolloClients, {
      default: apolloClient
    });
  },
  render: () => h(App)
});

app.use(router).mount("#app");
