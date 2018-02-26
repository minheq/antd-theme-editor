import { Steps } from 'antd';
const Step = Steps.Step;


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('steps', module);
  stories.add('simple', () => (
    
  <Steps current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>

  ))