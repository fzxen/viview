import { h, FunctionalComponent } from "vue";

const Alternation: FunctionalComponent<{ tag: string; [props: string]: any }> =
  function (props, context) {
    return h(props.tag, context.attrs, context.slots);
  };

export default Alternation;
