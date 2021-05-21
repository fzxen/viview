<template>
  <aside :class="[className]" :style="{width}">
    <slot></slot>
  </aside>
</template>

<script lang="ts">
import { defineComponent,computed } from "vue";
import { getClassName, validateCssUnit } from "../shared";

export default defineComponent({
  name: "ViAside",

  props: {
    width: {
      type: String,
      default: '300px',
      validator: validateCssUnit
    }
  },
  
  setup() {
    return {
      className: computed(() => getClassName("aside"))
    };
  },
});
</script>