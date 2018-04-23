import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.progress", module);
import { Progress } from "antd";

stories.addWithJSX("format", () => (
  <div>
    <Progress
      type="circle"
      percent={75}
      format={percent => `${percent} Days`}
    />
    <Progress type="circle" percent={100} format={() => "Done"} />
  </div>
));
