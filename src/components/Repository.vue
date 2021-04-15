<template>
  <div>
    <div class="tabs">
      <ul>
        <li>
          <router-link
            :to="{
              name: 'IssuesRoute',
              params: { id: 'name' }
            }"
            >Issues</router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'PullRequestsRoute',
              params: { id: 'name' }
            }"
            >Pull Requests</router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'ForksRoute',
              params: { id: 'name' }
            }"
            >Forks</router-link
          >
        </li>
      </ul>
    </div>
    repo description here
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Repository",
  props: {
    repository: {
      type: Object,
      required: true
    }
  }
});
</script>

<style scoped lang="scss"></style>
