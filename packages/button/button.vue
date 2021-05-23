<template>
  <button :class="className" :disabled="props.disabled" @click="emitClick">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { computed, defineProps, defineEmit } from "vue";
import { useClassName } from "../shared";
import type { ButtonProps } from "./utils";

const props = defineProps({
  type: {
    type: String as ButtonProps["type"],
    default: "default",
  },
  size: {
    type: String as ButtonProps["size"],
    default: "default",
  },
  plain: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
  nativeType: {
    type: String as ButtonProps["nativeType"],
    default: "button",
  },
});

const prefix = useClassName("button");
const className = computed(() => [
  prefix.name,
  props.type ? prefix.append("type", props.type).name : "",
  props.size ? prefix.append("size", props.size).name : "",
  {
    "is-plain": props.plain,
    "is-round": props.round,
    "is-circle": props.circle,
    "is-loading": props.loading,
    "is-disabled": props.disabled,
    "is-autofocus": props.autofocus,
  },
]);

const emit = defineEmit(["click"]);

const emitClick = () => emit("click");
</script>
