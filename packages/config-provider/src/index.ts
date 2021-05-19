import { defineComponent, provide, InjectionKey, inject } from "vue";

interface Options {
  prefix: string;
}

export const optionsKey: InjectionKey<Options> = Symbol();

export function getClassName(suffix: string) {
  const options = inject(optionsKey);
  return `${options.prefix}-${suffix}`;
}

export default defineComponent({
  name: "ConfigProvider",

  props: {
    options: {
      type: Object as () => Options,
      default: () => ({}),
    },
  },

  setup(props) {
    provide(optionsKey, {
      prefix: props.options.prefix ?? "vi",
    });
  },
});
