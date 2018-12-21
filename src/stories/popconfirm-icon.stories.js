import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.popconfirm", module);
import { Popconfirm, Icon } from "antd";

stories.addWithJSX("icon", () => (
  <Popconfirm
    title="Are you sure？"
    icon={<Icon type="question-circle-o" style={{ color: "red" }} />}
  >
    <a href="#">Delete</a>
  </Popconfirm>
));
