import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.badge", module);
import { Badge, Icon } from "antd";

stories.addWithJSX("basic", () => (
  <div>
    <Badge count={5}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={0} showZero>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={<Icon type="clock-circle" style={{ color: "#f5222d" }} />}>
      <a href="#" className="head-example" />
    </Badge>
  </div>
));
