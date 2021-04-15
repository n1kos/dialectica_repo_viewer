<template>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavbarView"
});
</script>

<style></style>
