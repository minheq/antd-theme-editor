import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.time-picker", module);
import { TimePicker, Icon } from "antd";
import moment from "moment";

function onChange(time, timeString) {
  console.log(time, timeString);
}

const icon = <Icon type="smile" />;

stories.addWithJSX("suffix", () => (
  <TimePicker
    suffixIcon={icon}
    onChange={onChange}
    defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
  />
));
