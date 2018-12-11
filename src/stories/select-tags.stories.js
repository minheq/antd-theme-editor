import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.select", module);
import { Select } from "antd";

const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

stories.addWithJSX("tags", () => (
  <Select
    mode="tags"
    style={{ width: "100%" }}
    placeholder="Tags Mode"
    onChange={handleChange}
  >
    {children}
  </Select>
));
