
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('timeline', module);
  import { Timeline } from 'antd';

stories.add('pending', () => (
    
  <Timeline pending="Recording...">
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
  </Timeline>

  ))