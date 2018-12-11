import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.steps", module);
import { Steps } from "antd";

const Step = Steps.Step;

stories.addWithJSX("small-size", () => (
  <Steps size="small" current={1}>
    <Step title="Finished" />
    <Step title="In Progress" />
    <Step title="Waiting" />
  </Steps>
));
