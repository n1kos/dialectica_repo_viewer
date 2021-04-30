<template>
  <th :colspan="colSpan">
    <abbr title="">
      {{ elementLabel }}
    </abbr>
    <span
      class="is-relative"
      style="left: 10px;"
      :data-name="hassDefaultActiveName"
    >
      <span
        class="is-clickable"
        style="position: absolute; top:-10px"
        @click.prevent="submitHandler('asc', $event)"
        data-active="false"
        data-method="asc"
      >
        <i class="arrow up" />
      </span>
      <span
        class="is-clickable"
        style="position: absolute;"
        @click.prevent="submitHandler('des', $event)"
        data-active="false"
        data-method="des"
      >
        <i class="arrow down" />
      </span>
    </span>
  </th>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

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
    hassDefaultActiveName: {
      type: String,
      required: false,
      default() {
        "";
      }
    },
    hassDefaultActiveMethod: {
      type: String,
      required: false,
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

    onMounted((): void => {
      //@ts-expect-error define types
      if (props.hassDefaultActiveName !== undefined) {
        //@ts-expect-error define types
        const defName = props.hassDefaultActiveName;
        const baseElement: HTMLElement | null = document.querySelector(
          `[data-name="${defName}"]`
        );
        //@ts-expect-error define types
        baseElement
          //@ts-expect-error define types
          .querySelector(`[data-method=${props.hassDefaultActiveMethod}]`)
          .setAttribute("data-active", "true");
      }
    });
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
