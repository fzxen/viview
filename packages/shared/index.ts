import type { App } from "vue";
import { GlobalOptions } from "./options";

export type EnrichedSFC<T, U> = T &
  U & { install(app: App, options?: GlobalOptions): void };

export * from "./options";

export const validateCssUnit = (val: string) =>
  /(px|rem|em|vw|vh|vmin|vmax|ex|ch|cm|mm|in|pt|pc)$/.test(val);

export const validateProps = (types: unknown[]) => {
  return function (val: unknown) {
    return types.includes(val);
  };
};

export { default as Alternation } from "./components/alternation";
