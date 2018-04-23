import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.switch", module);
import { Switch } from "antd";

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

stories.addWithJSX("basic", () => (
  <Switch defaultChecked onChange={onChange} />
));
