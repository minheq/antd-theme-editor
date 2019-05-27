import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.card", module);
import { Card } from "antd";

stories.addWithJSX("basic", () => (
  <div>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{ width: 300 }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card
      size="small"
      title="Small size card"
      extra={<a href="#">More</a>}
      style={{ width: 300 }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>
));
