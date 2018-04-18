import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("components.affix", module);
import { Affix, Button } from "antd";

stories.addWithJSX("on-change", () => (
  <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
    <Button>120px to affix top</Button>
  </Affix>
));
