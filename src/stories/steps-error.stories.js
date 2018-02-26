import { Steps } from 'antd';
const Step = Steps.Step;


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('steps', module);
  stories.add('error', () => (
    
  <Steps current={1} status="error">
    <Step title="Finished" description="This is a description" />
    <Step title="In Process" description="This is a description" />
    <Step title="Waiting" description="This is a description" />
  </Steps>

  ))