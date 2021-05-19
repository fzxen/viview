import type { App } from "vue";
import { EnrichedSFC } from "@viview/shared";
import Layout from "./layout.vue";
import Aside from "./aside.vue";
import Footer from "./footer.vue";
import Header from "./header.vue";
import Main from "./main.vue";

const components = { Aside, Footer, Header, Main };
const names = Object.keys(components);

Layout.Aside = Aside;
Layout.Footer = Footer;
Layout.Header = Header;
Layout.Main = Main;

Layout.install = function (app: App) {
  names.forEach((name) => app.component(name, components[name]));
};

const _Layout = Layout as EnrichedSFC<
  typeof Layout,
  {
    Aside: typeof Aside;
    Footer: typeof Footer;
    Header: typeof Header;
    Main: typeof Main;
  }
>;

export default _Layout;
