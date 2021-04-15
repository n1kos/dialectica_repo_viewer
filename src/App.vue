<template>
  <div id="main" class="container">
    <header>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <router-link class="navbar-item" to="/">
              <span class="is-link is-large">Home</span>
            </router-link>
            <router-link class="navbar-item" to="/about">
              <span class="is-link is-large">About</span>
            </router-link>
          </div>
        </div>
      </nav>
    </header>

    <div v-if="!isHomePage" class="tabs">
      <ul>
        <li><router-link to="/issues">Issues</router-link></li>
        <li><router-link to="/pull-requests">Pull Requests</router-link></li>
        <li><router-link to="/forks">Forks</router-link></li>
      </ul>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, context) {
    const isHomePage = ref("true");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const visitedRoute = (context: any): void => {
      context.isHomePage != context.isHomePage;
    };

    return {
      isHomePage,
      visitedRoute
    };
  }
});
</script>
<style lang="scss">
@import "@/design/index.scss";
</style>
