import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.switch", module);
import { Switch } from "antd";

stories.addWithJSX("loading", () => (
  <div>
    <Switch loading defaultChecked />
    <br />
    <Switch size="small" loading />
  </div>
));
