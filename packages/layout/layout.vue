<template>
  <section :class="[className, {'is-vertical': isVertical}]">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent,Component } from "vue";
import { getClassName } from "../shared";

export default defineComponent({
  name: "ViLayout",

  props: {
    direction: {
      type: String as () => "vertical" | "horizontal",
      default: ""
    }
  },

  setup(props, {slots}) {
    const isVertical = computed(() => {
      if(props.direction === "vertical") return true;
      else if (props.direction) return false;

      // 判断子节点 是否有header 或者 footer
      // 有使用垂直布局
      const nodes = slots.default();
      return nodes.some(vnode => {
        const name = (vnode.type as Component).name;
        console.log(name, nodes);
        return name === "ViHeader" || name === "ViFooter";
      });
    });
    return {
      isVertical,
      className: computed(() => getClassName("layout"))
    };
  },
});
</script>