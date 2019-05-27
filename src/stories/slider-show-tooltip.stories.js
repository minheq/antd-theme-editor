import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.slider", module);
import { Slider } from "antd";

stories.addWithJSX("show-tooltip", () => (
  <Slider defaultValue={30} tooltipVisible />
));
