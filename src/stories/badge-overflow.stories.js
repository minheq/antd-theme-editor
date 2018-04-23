import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.badge", module);
import { Badge } from "antd";

stories.addWithJSX("overflow", () => (
  <div>
    <Badge count={99}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={100}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={99} overflowCount={10}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={1000} overflowCount={999}>
      <a href="#" className="head-example" />
    </Badge>
  </div>
));
