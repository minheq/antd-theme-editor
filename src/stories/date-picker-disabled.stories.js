import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.date-picker", module);
import { DatePicker } from "antd";
import moment from "moment";

const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = "YYYY-MM-DD";
stories.addWithJSX("disabled", () => (
  <div>
    <DatePicker defaultValue={moment("2015-06-06", dateFormat)} disabled />
    <br />
    <MonthPicker defaultValue={moment("2015-06", "YYYY-MM")} disabled />
    <br />
    <RangePicker
      defaultValue={[
        moment("2015-06-06", dateFormat),
        moment("2015-06-06", dateFormat)
      ]}
      disabled
    />
  </div>
));
