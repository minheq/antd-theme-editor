import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.mentions", module);
import { Mentions } from "antd";

const { Option } = Mentions;

stories.addWithJSX("placement", () => (
  <Mentions style={{ width: "100%" }} placement="top">
    <Option value="afc163">afc163</Option>
    <Option value="zombieJ">zombieJ</Option>
    <Option value="yesmeck">yesmeck</Option>
  </Mentions>
));
