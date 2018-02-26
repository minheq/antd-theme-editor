
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('time-picker', module);
  import { TimePicker } from 'antd';
import moment from 'moment';

stories.add('disabled', () => (
    
  <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />

  ))