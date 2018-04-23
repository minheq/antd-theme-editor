import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.progress", module);
import { Progress } from "antd";

stories.addWithJSX("circle", () => (
  <div>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
  </div>
));
