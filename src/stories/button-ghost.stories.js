import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.button", module);
import { Button } from "antd";

stories.addWithJSX("ghost", () => (
  <div style={{ background: "rgb(190, 200, 200)", padding: "26px 16px 16px" }}>
    <Button type="primary" ghost>
      Primary
    </Button>
    <Button ghost>Default</Button>
    <Button type="dashed" ghost>
      Dashed
    </Button>
    <Button type="danger" ghost>
      danger
    </Button>
  </div>
));
