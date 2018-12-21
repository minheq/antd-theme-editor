import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.icon", module);
import { Icon } from "antd";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
});

stories.addWithJSX("iconfont", () => (
  <div className="icons-list">
    <IconFont type="icon-tuichu" />
    <IconFont type="icon-facebook" />
    <IconFont type="icon-twitter" />
  </div>
));
