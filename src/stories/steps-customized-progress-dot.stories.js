import { Steps, Popover } from 'antd';
const Step = Steps.Step;

const customDot = (dot, { status, index }) => (
  <Popover content={<span>step {index} status: {status}</span>}>
    {dot}
  </Popover>
);


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('steps', module);
  stories.add('customized-progress-dot', () => (
    
  <Steps current={1} progressDot={customDot}>
    <Step title="Finished" description="You can hover on the dot." />
    <Step title="In Progress" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
  </Steps>

  ))