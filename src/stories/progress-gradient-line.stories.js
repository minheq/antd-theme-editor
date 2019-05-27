import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.progress", module);
import { Progress } from "antd";

const Demo = () => (
  <div>
    <Progress
      strokeColor={{
        "0%": "#108ee9",
        "100%": "#87d068"
      }}
      percent={99.9}
    />
    <Progress
      strokeColor={{
        from: "#108ee9",
        to: "#87d068"
      }}
      percent={99.9}
      status="active"
    />
  </div>
);

stories.addWithJSX("gradient-line", () => <Demo />);
