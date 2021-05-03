<template>
  <div class="tabs">
    <ul>
      <li>
        <router-link
          :to="{
            name: 'IssuesRoute',
            params: { id: repository.node.nameWithOwner }
          }"
        >
          <div class="level-item has-text-centered">
            <div>
              <p class="is-size-5">{{ repository.node.issues.totalCount }}</p>
              <p class="is-size-4">Issues</p>
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link
          :to="{
            name: 'PullRequestsRoute',
            params: { id: repository.node.nameWithOwner }
          }"
        >
          <div class="level-item has-text-centered">
            <div>
              <p class="is-size-5">
                {{ repository.node.pullRequests.totalCount }}
              </p>
              <p class="is-size-4">Pull Requests</p>
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link
          :to="{
            name: 'ForksRoute',
            params: { id: repository.node.nameWithOwner }
          }"
        >
          <div class="level-item has-text-centered">
            <div>
              <p class="is-size-5">{{ repository.node.forkCount }}</p>
              <p class="is-size-4">Forks</p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TabNavBarView",

  props: {
    repository: {
      type: Object,
      required: true
    }
  }
});
</script>

<style lang="scss">
@import "@/design/_variables.scss";
.tabs .router-link-active {
  border-bottom-color: $primary;
  color: $primary;
}
</style>
