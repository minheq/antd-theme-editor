import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.back-top", module);
import { BackTop } from "antd";

stories.addWithJSX("custom", () => (
  <div>
    <BackTop>
      <div className="ant-back-top-inner">UP</div>
    </BackTop>
    Scroll down to see the bottom-right
    <strong style={{ color: "#1088e9" }}> blue </strong>
    button.
  </div>
));
