import { InjectionKey, inject, App } from "vue";

export interface GlobalOptions {
  prefix: string;
}

const optionsKey: InjectionKey<GlobalOptions> = Symbol();

export function getClassName(
  block: string,
  element?: string,
  modifier?: string
) {
  const options = injectOption();
  let className = `${options.prefix}_${block}`;
  if (element) className += "__" + element;
  if (modifier) className += "-" + modifier;

  return className;
}

export function provideOption(app: App, options?: GlobalOptions) {
  app.provide(optionsKey, {
    prefix: options?.prefix ?? "vi",
  });
}

export function injectOption() {
  const options = inject(optionsKey);

  return Object.assign<GlobalOptions, Partial<GlobalOptions>>(
    {
      prefix: "vi",
    },
    options ?? {}
  );
}
