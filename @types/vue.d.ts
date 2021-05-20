declare module "*.vue" {
  import type { App, defineComponent } from "vue";
  import type { GlobalOptions } from "@viview/shared/src";
  const component: ReturnType<typeof defineComponent> & {
    install(app: App, options?: GlobalOptions): void;
  };
  export default component;
}
