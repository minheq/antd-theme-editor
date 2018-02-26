
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('time-picker', module);
  import { TimePicker } from 'antd';

function onChange(time, timeString) {
  console.log(time, timeString);
}

stories.add('12hours', () => (
    
  <div>
    <TimePicker use12Hours onChange={onChange} />
    <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} />
    <TimePicker use12Hours format="h:mm a" onChange={onChange} />
  </div>

  ))