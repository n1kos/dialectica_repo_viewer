<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img src="@/assets/dialectica-logo.svg" width="112" height="28" />
        </a>
        <a
          role="button"
          class="navbar-burger"
          @click="toggleMenu"
          :class="{ 'is-active': isActive }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasic"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarBasic"
        class="navbar-menu"
        :class="{ 'is-active': isActive }"
      >
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">
            <span class="is-capitalized">Home</span>
          </router-link>
          <router-link class="navbar-item" to="/about">
            <span class="is-capitalized">About</span>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "NavbarView",
  setup() {
    const isActive = ref(false);
    const toggleMenu = (): void => {
      isActive.value = !isActive.value;
    };
    return {
      toggleMenu,
      isActive
    };
  }
});
</script>

<style></style>
