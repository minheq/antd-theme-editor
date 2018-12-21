import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.icon", module);
import { Icon } from "antd";

stories.addWithJSX("two-tone", () => (
  <div className="icons-list">
    <Icon type="smile" theme="twoTone" />
    <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
    <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
  </div>
));
