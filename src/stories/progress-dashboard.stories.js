import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.progress", module);
import { Progress } from "antd";

stories.addWithJSX("dashboard", () => (
  <Progress type="dashboard" percent={75} />
));
