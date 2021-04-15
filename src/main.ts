import { createApp, h, provide } from "vue";
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  from,
  HttpLink
} from "@apollo/client/core";
import { ApolloClients } from "@vue/apollo-composable";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import { StorageService } from "./shared/services/storage-service";

const storageSrv = new StorageService();
const token = storageSrv.getApiToken();

const additiveLink = from([
  new ApolloLink((operation, forward) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    operation.setContext(({ headers }: any) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null
      }
    }));
    return forward(operation);
  }),
  new HttpLink({ uri: "https://api.github.com/graphql" })
]);

const apolloClient = new ApolloClient({
  link: additiveLink,
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
