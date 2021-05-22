import { App, Plugin } from "vue";
import { GlobalOptions, provideOption } from "./shared";

import _Layout from "./layout";
import _Grid from "./grid";

export const Layout = _Layout;
export const Grid = _Grid;

const components: Plugin[] = [Layout, Grid];

const install = (app: App, options: GlobalOptions): void => {
  provideOption(app, options);
  components.forEach((c) => app.use(c, options));
};

export * from "./layout";

export default {
  install,
};
