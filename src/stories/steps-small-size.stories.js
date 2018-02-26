import { Steps } from 'antd';
const Step = Steps.Step;


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('steps', module);
  stories.add('small-size', () => (
    
  <Steps size="small" current={1}>
    <Step title="Finished" />
    <Step title="In Progress" />
    <Step title="Waiting" />
  </Steps>

  ))