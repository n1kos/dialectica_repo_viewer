<template>
  <div id="main">
    <div id="nav">
      <div class="tabs">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/issues">Issues</router-link></li>
          <li><router-link to="/pull-requests">Pull Requests</router-link></li>
          <li><router-link to="/forks">Forks</router-link></li>
        </ul>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/design/index.scss";
</style>
