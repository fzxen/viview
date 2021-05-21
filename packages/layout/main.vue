<template>
  <main :class="className" >
    <slot></slot>
  </main>
</template>
<script lang="ts">
import { defineComponent ,computed} from "vue";
import { getClassName } from "../shared";

export default defineComponent({
  name: "ViMain",
  
  setup() {
    return {className: computed(() => getClassName("main"))};
  }
});
</script>
