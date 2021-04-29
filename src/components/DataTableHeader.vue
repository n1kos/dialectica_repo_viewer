<template>
  <th :colspan="colSpan">
    <abbr title="">
      {{ elementLabel }}
    </abbr>
    <span class="is-relative" style="left: 10px;">
      <span
        class="is-clickable"
        style="position: absolute; top:-10px"
        @click.prevent="submitHandler('asc', $event)"
        data-active="false"
      >
        <i class="arrow up" />
      </span>
      <span
        class="is-clickable"
        @click.prevent="submitHandler('des', $event)"
        data-active="false"
      >
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
      type: String,
      default() {
        "";
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
    const submitHandler = (payload: string, event: any) => {
      // could use models, prefer to play with DOM a little
      // the sorting option that was clicked will be the 'active' one
      // and it will be hidden. every other sorting option will be available
      let transElement: HTMLElement;
      if (event.srcElement.nodeName === "I") {
        transElement = event.srcElement.parentElement;
      } else {
        transElement = event.srcElement;
      }
      document.querySelectorAll("[data-active]").forEach(_element => {
        _element.setAttribute("data-active", "false");
      });
      transElement.setAttribute("data-active", "true");
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
