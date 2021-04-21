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
import { store, key } from "./store";

// import { StorageService } from "./shared/services/storage-service";

/**
 * ?this is just temporary so i wont have to type the token everytime
 */
// const storageSrv = new StorageService();
// const token =
//   storageSrv.getApiToken() === null
//     ? process.env.VUE_APP_GITHUB_ACCESS_TOKEN
//     : storageSrv.getApiToken();
// console.log(token);

const token = process.env.VUE_APP_GITHUB_ACCESS_TOKEN;

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

app
  .use(store, key)
  .use(router)
  .mount("#app");
