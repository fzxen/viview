<template>
  <section :class="className">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import {getClassName} from '@viview/config-provider'

export default defineComponent({
  name: "Layout",

  setup() {
    
    return {
      className: computed(() => getClassName("layout"))
    };
  },
});
</script>