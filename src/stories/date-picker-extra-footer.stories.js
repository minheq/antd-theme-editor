import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.date-picker", module);
import { DatePicker } from "antd";

const { RangePicker, MonthPicker } = DatePicker;

stories.addWithJSX("extra-footer", () => (
  <div>
    <DatePicker renderExtraFooter={() => "extra footer"} />
    <DatePicker renderExtraFooter={() => "extra footer"} showTime />
    <RangePicker renderExtraFooter={() => "extra footer"} />
    <RangePicker renderExtraFooter={() => "extra footer"} showTime />
    <MonthPicker
      renderExtraFooter={() => "extra footer"}
      placeholder="Select month"
    />
  </div>
));
