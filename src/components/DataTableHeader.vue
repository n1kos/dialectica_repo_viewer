<template>
  <th :colspan="colSpan">
    <abbr title="">
      {{ elementLabel }}
    </abbr>
    <span class="is-relative" style="left: 10px;">
      <span
        class="is-clickable"
        :class="{isActive : isActive}"
        style="position: absolute; top:-10px"
        @click.prevent="submitHandler('asc')"
      >
        <i class="arrow up" />
      </span>
      <span class="is-clickable" @click.prevent="submitHandler('des')">
        <i class="arrow down" />
      </span>
    </span>
  </th>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DataTableHeader",
  props: {
    elementLabel: {
      type: String,
      default() {
        "";
      }
    },
    colSpan: {
      type: Number,
      default() {
        1;
      }
    },
    sortFunctionLabel: {
      type: String,
      default() {
        "";
      }
    }
  },

  setup(props, context) {
    const submitHandler = (payload: string) => {
      //@ts-expect-error define types
      context.emit(props.sortFunctionLabel, payload);
    };

    return {
      submitHandler
    };
  }
});
</script>

<style lang="scss">
@import "@/design/_variables.scss";
@import "@/design/DataTableHeader.scss";
</style>
