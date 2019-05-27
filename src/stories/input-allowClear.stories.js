import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.input", module);
import { Input } from "antd";

const onChange = e => {
  console.log(e);
};

stories.addWithJSX("allowClear", () => (
  <Input placeholder="input with clear icon" allowClear onChange={onChange} />
));
