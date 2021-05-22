import Row from "./row.vue";
import Col from "./col.vue";
import { App } from "vue";
import { GlobalOptions, provideOption } from "../shared";

const Grid = {
  Row,
  Col,
  install(app: App, options: GlobalOptions): void {
    provideOption(app, options);
    app.component("ViRow", Row);
    app.component("ViCol", Col);
  },
};

export default Grid;
