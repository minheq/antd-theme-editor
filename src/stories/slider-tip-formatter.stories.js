import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.slider", module);
import { Slider } from "antd";

function formatter(value) {
  return `${value}%`;
}

stories.addWithJSX("tip-formatter", () => (
  <div>
    <Slider tipFormatter={formatter} />
    <Slider tipFormatter={null} />
  </div>
));
