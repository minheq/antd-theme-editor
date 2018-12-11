import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.badge", module);
import { Badge } from "antd";

stories.addWithJSX("title", () => (
  <div>
    <Badge count={5} title="Custom hover text">
      <a href="#" className="head-example" />
    </Badge>
  </div>
));
