import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.button", module);
import { Button } from "antd";

stories.addWithJSX("block", () => (
  <div>
    <Button type="primary" block>
      Primary
    </Button>
    <Button block>Default</Button>
    <Button type="dashed" block>
      Dashed
    </Button>
    <Button type="danger" block>
      Danger
    </Button>
    <Button type="link" block>
      Link
    </Button>
  </div>
));
