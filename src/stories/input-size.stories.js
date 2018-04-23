import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.input", module);
import { Input } from "antd";

stories.addWithJSX("size", () => (
  <div className="example-input">
    <Input size="large" placeholder="large size" />
    <Input placeholder="default size" />
    <Input size="small" placeholder="small size" />
  </div>
));
