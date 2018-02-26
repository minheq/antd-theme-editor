import { TimePicker } from 'antd';


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('time-picker', module);
  stories.add('interval-options', () => (
    
  <TimePicker minuteStep={15} secondStep={10} />

  ))