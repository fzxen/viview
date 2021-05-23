<template>
  <Alternation :tag="props.tag" :class="className" :style="style">
    <slot></slot>
  </Alternation>
</template>

<script lang="ts" setup>
import { computed, defineProps, inject } from "vue";
import { Alternation, getClassName } from "../shared";
import { gutterKey } from "./utils";

const props = defineProps({
  span: {
    type: Number,
    default: 24,
  },
  tag: {
    type: String,
    default: "div",
  },
  offset: {
    type: Number,
    default: 0,
  },
  pull: {
    type: Number,
    default: 0,
  },
  push: {
    type: Number,
    default: 0,
  },
  xs: [Number, Object as () => { span: number; offset: number }], // [0,768)
  sm: [Number, Object as () => { span: number; offset: number }], // [768, 992)
  md: [Number, Object as () => { span: number; offset: number }], // [992, 1200])
  lg: [Number, Object as () => { span: number; offset: number }], // [1200, 1920)
  xl: [Number, Object as () => { span: number; offset: number }], // [1920, +infinite)
});

const positionKeys = ["span", "offset", "pull", "push"] as const;
const reactiveKeys = ["xs", "sm", "md", "lg", "xl"] as const;
const prefix = getClassName("col");

const className = computed(() => {
  return [
    prefix,
    ...positionKeys.map(
      (key) => props[key] && getClassName("col", key, String(props[key]))
    ),
    ...reactiveKeys
      .map((key) => {
        const val = props[key];
        if (typeof val === "number")
          return getClassName("col",  `${key}-span`, String(val));
        else if (val && ("span" in val || "offset" in val)) {
          return Object.keys(val).map((pos) =>
            getClassName("col", `${key}-${pos}`, props[key][pos])
          );
        }
        return null;
      })
      .flat(),
  ].filter((i) => i);
});

const gutter = inject(gutterKey, "0");

const style = computed(() => {
  const val = `calc(${gutter}/2)`;
  return {
    paddingLeft: val,
    paddingRight: val,
  };
});
</script>
