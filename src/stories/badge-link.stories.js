import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.badge", module);
import { Badge } from "antd";

stories.addWithJSX("link", () => (
  <a href="#">
    <Badge count={5}>
      <span className="head-example" />
    </Badge>
  </a>
));
