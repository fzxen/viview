import { default as _Layout } from "@viview/layout";
import { GlobalOptions, provideOption } from "@viview/shared/src";
import { App } from "vue";

export const Layout = _Layout;

export default {
  install(app: App, options: GlobalOptions) {
    provideOption(app, options);
    app.use(Layout);
  },
};
