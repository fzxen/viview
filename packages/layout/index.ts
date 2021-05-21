import type { App } from "vue";
import _Layout from "./layout.vue";
import Aside from "./aside.vue";
import Footer from "./footer.vue";
import Header from "./header.vue";
import Main from "./main.vue";
import { EnrichedSFC, GlobalOptions, provideOption } from "../shared";

const Layout = _Layout as EnrichedSFC<
  typeof _Layout,
  {
    Aside;
    Footer;
    Header;
    Main;
  }
>;

Layout.install = function (app: App, options: GlobalOptions) {
  provideOption(app, options);
  app.component("ViLayout", Layout);
  app.component("ViAside", Aside);
  app.component("ViHeader", Header);
  app.component("ViFooter", Footer);
  app.component("ViMain", Main);
};

Layout.Aside = Aside;
Layout.Footer = Footer;
Layout.Header = Header;
Layout.Main = Main;

export default Layout;
