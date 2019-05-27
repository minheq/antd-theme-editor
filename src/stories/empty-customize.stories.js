import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.empty", module);
import { Empty, Button } from "antd";

stories.addWithJSX("customize", () => (
  <Empty
    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
    imageStyle={{
      height: 60
    }}
    description={
      <span>
        Customize <a href="#API">Description</a>
      </span>
    }
  >
    <Button type="primary">Create Now</Button>
  </Empty>
));
