import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.time-picker", module);
import { TimePicker } from "antd";
import moment from "moment";

stories.addWithJSX("size", () => (
  <div>
    <TimePicker defaultValue={moment("12:08:23", "HH:mm:ss")} size="large" />
    <TimePicker defaultValue={moment("12:08:23", "HH:mm:ss")} />
    <TimePicker defaultValue={moment("12:08:23", "HH:mm:ss")} size="small" />
  </div>
));
