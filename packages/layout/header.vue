<template>
  <header :class="[className]" :style="{height}">
    <slot></slot>
  </header>
</template>

<script lang="ts">
import { defineComponent,computed } from "vue";
import { getClassName, validateCssUnit } from "../shared";

export default defineComponent({
  name: "ViHeader",

  props: {
    height: {
      type: String,
      default: "60px",
      validator: validateCssUnit
    }
  },
  
  setup() {
    return {
      className: computed(() => getClassName("header"))
    };
  },
});
</script>