<template>
  <footer :class="className" :style="{ height }">
    <slot></slot>
  </footer>
</template>
<script lang="ts">
import { defineComponent ,computed} from "vue";
import { getClassName, validateCssUnit } from "../shared";

export default defineComponent({
  name: "ViFooter",
  props: {
    height: {
      type: String,
      default: "60px",
      validator: validateCssUnit
    },
  },
  setup() {
    return {className: computed(() => getClassName("footer"))};
  }
});
</script>
