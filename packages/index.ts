import { App, Plugin } from "vue";
import Layout from "./layout";
import { GlobalOptions, provideOption } from "./shared";

interface Options {
  prefix: "vi";
}

const components: Plugin[] = [Layout];

const install = (app: App, options: GlobalOptions) => {
  provideOption(app, options);
  components.forEach((c) => app.use(c, options));
};

export default {
  install,
};
