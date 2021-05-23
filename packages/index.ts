import { App, Plugin } from "vue";
import { GlobalOptions, provideOption } from "./shared";

import _Layout from "./layout";
import _Grid from "./grid";
import _Button from "./button";

export const Layout = _Layout;
export const Grid = _Grid;
export const Button = _Button;

const components: Plugin[] = [Layout, Grid, Button];

const install = (app: App, options: GlobalOptions): void => {
  provideOption(app, options);
  components.forEach((c) => app.use(c, options));
};

export default { install };
