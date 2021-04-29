<template>
  <th :colspan="colSpan">
    <abbr title="">
      {{ elementLabel }}
    </abbr>
    <button @click.prevent="submitHandler('asc')" type="submit">
      Sort
    </button>
    <button @click.prevent="submitHandler('des')" type="submit">
      Sort
    </button>
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

<style></style>
