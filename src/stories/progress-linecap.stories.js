import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.progress", module);
import { Progress } from "antd";

stories.addWithJSX("linecap", () => (
  <div>
    <Progress strokeLinecap="square" percent={75} />
    <Progress strokeLinecap="square" type="circle" percent={75} />
    <Progress strokeLinecap="square" type="dashboard" percent={75} />
  </div>
));
