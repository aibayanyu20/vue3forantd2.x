import { App } from "vue";
import { Button, Layout, Menu } from "ant-design-vue";
export default (app: App) => {
  app.use(Button);
  app.use(Layout);
  app.use(Menu);
};
