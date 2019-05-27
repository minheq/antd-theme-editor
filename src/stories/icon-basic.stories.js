import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.icon", module);
import { Icon } from "antd";

stories.addWithJSX("basic", () => (
  <div className="icons-list">
    <Icon type="home" />
    <Icon type="setting" theme="filled" />
    <Icon type="smile" theme="outlined" />
    <Icon type="sync" spin />
    <Icon type="smile" rotate={180} />
    <Icon type="loading" />
  </div>
));
