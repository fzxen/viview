import { InjectionKey, inject, App } from "vue";

export interface GlobalOptions {
  prefix: string;
}

const optionsKey: InjectionKey<GlobalOptions> = Symbol();

export function getClassName(
  block?: string,
  element?: string,
  modifier?: string
) {
  if (!block) return "";

  const options = injectOption();
  let className = `${options.prefix}_${block}`;
  if (element) className += "__" + element;
  if (modifier) className += "-" + modifier;

  return className;
}

class ClassName {
  private names: string[];
  private prefix: string;
  constructor(names: string[], prefix: string) {
    this.names = names;
    this.prefix = prefix;
  }
  get name() {
    const [block, element, modifier] = this.names;
    if (!block) return "";

    let className = `${this.prefix}_${block}`;
    if (element) className += "__" + element;
    if (modifier) className += "-" + modifier;

    return className;
  }
  append(...names: string[]) {
    return new ClassName(this.names.concat(names), this.prefix);
  }
}

export function useClassName(block: string, ...names: string[]): ClassName {
  const { prefix } = injectOption();
  return new ClassName([block, ...names], prefix);
}

export function provideOption(app: App, options?: GlobalOptions) {
  app.provide(optionsKey, {
    prefix: options?.prefix ?? "vi",
  });
}

export function injectOption() {
  return inject(optionsKey, { prefix: "vi" });
}
