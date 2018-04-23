import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.time-picker", module);
import { TimePicker } from "antd";

stories.addWithJSX("interval-options", () => (
  <TimePicker minuteStep={15} secondStep={10} />
));
