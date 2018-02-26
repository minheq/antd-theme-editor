
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('time-picker', module);
  import { TimePicker } from 'antd';

stories.add('interval-options', () => (
    
  <TimePicker minuteStep={15} secondStep={10} />

  ))