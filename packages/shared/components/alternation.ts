import { defineComponent, h } from "vue";

const Alternation = defineComponent({
  name: "Alternate",
  inheritAttrs: false,
  props: {
    tag: {
      default: "div",
    },
  },
  setup(props, context) {
    return () => h(props.tag, context.attrs, context.slots);
  },
});

export default Alternation;
