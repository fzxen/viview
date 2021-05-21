import { App, Plugin } from "vue";
import { GlobalOptions, provideOption } from "./shared";

import { default as _Layout } from "./layout";

export const Layout = _Layout;

const components: Plugin[] = [Layout];

const install = (app: App, options: GlobalOptions) => {
  provideOption(app, options);
  components.forEach((c) => app.use(c, options));
};

export * from "./layout";

export default {
  install,
};
