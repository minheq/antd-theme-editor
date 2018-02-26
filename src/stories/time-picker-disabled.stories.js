import { TimePicker } from 'antd';
import moment from 'moment';


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('time-picker', module);
  stories.add('disabled', () => (
    
  <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />

  ))