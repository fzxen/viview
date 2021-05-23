import _Button from "./button.vue";
import ButtonGroup from "./button-group.vue";
import { EnrichedSFC, GlobalOptions, provideOption } from "../shared";
import { App } from "vue";

const Button = _Button as EnrichedSFC<typeof _Button, { ButtonGroup }>;

Button.install = function (app: App, options: GlobalOptions) {
  provideOption(app, options);
  app.component("ViButton", Button);
  app.component("ViButtonGroup", ButtonGroup);
};

export default Button;
