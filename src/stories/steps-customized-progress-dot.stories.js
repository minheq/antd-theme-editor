import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.steps", module);
import { Steps, Popover } from "antd";

const Step = Steps.Step;

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

stories.addWithJSX("customized-progress-dot", () => (
  <Steps current={1} progressDot={customDot}>
    <Step title="Finished" description="You can hover on the dot." />
    <Step title="In Progress" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
  </Steps>
));
