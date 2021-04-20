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
    {{ getComputedRepository }}

    {{ getComputedRepository.node }}
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, ComputedRef, computed } from "vue";

export default defineComponent({
  name: "Repository",
  props: {
    repository: {
      type: String,
      required: true
    }
  },

  setup(context) {
    const getComputedRepository: ComputedRef<string> = computed((): string =>
      JSON.parse(context.repository)
    );

    return {
      getComputedRepository
    };
  }
});
</script>

<style scoped lang="scss"></style>
