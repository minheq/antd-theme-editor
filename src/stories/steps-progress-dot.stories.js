import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.steps", module);
import { Steps } from "antd";
const Step = Steps.Step;

stories.addWithJSX("progress-dot", () => (
  <Steps progressDot current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>
));
