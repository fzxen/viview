<template>
  <Alternation :tag="props.tag" :class="className" :style="style">
    <slot></slot>
  </Alternation>
</template>

<script lang="ts" setup>
import { computed, defineProps, provide } from "vue";
import {
  Alternation,
  getClassName,
  validateCssUnit,
  validateProps,
} from "../shared";
import { gutterKey } from "./utils";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  gutter: {
    type: String,
    validator: validateCssUnit,
    default: "0px",
  },
  type: {
    type: String,
    default: "flex",
  },
  justify: {
    type: String as () => "start" | "end" | "center" | "around" | "between",
    validator: validateProps(["start", "end", "center", "around", "between"]),
    default: "start",
  },
  align: {
    type: String as () => "start" | "center" | "end",
    validator: validateProps(["start", "center", "end"]),
    default: "start",
  },
});

const className = computed(() => [
  getClassName("row"),
  {
    ["is-flex"]: props.type === "flex",
    [`is-justify-${props.justify}`]: props.type === "flex",
    [`is-align-${props.align}`]: props.type === "flex",
  },
]);

const style = computed(() => {
  const val = `calc(-${props.gutter}/2)`;
  return {
    marginLeft: val,
    marginRight: val,
  };
});

provide(gutterKey, props.gutter);
</script>
