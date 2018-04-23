import { storiesOf } from "@storybook/react";
import { Affix, Button } from "antd";
import React from "react";

const stories = storiesOf("antDesign.affix", module);
stories.addWithJSX("basic", () => (
  <div>
    <Affix>
      <Button type="primary">Affix top</Button>
    </Affix>
    <br />
    <Affix offsetBottom={0}>
      <Button type="primary">Affix bottom</Button>
    </Affix>
  </div>
));
