import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.badge", module);
import { Badge } from "antd";

stories.addWithJSX("no-wrapper", () => (
  <div>
    <Badge count={25} />
    <Badge
      count={4}
      style={{
        backgroundColor: "#fff",
        color: "#999",
        boxShadow: "0 0 0 1px #d9d9d9 inset"
      }}
    />
    <Badge count={109} style={{ backgroundColor: "#52c41a" }} />
  </div>
));
