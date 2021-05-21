import type { App } from "vue";
import Layout from "./layout.vue";
import Aside from "./aside.vue";
import Footer from "./footer.vue";
import Header from "./header.vue";
import Main from "./main.vue";
import { GlobalOptions, provideOption } from "../shared";

export default {
  Layout,
  Aside,
  Footer,
  Header,
  Main,
  install(app: App, options: GlobalOptions) {
    provideOption(app, options);
    app.component("ViLayout", Layout);
    app.component("ViAside", Aside);
    app.component("ViHeader", Header);
    app.component("ViFooter", Footer);
    app.component("ViMain", Main);
  },
};
