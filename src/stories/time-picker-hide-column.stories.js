import { TimePicker } from 'antd';
import moment from 'moment';

const format = 'HH:mm';


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('time-picker', module);
  stories.add('hide-column', () => (
    
  <TimePicker defaultValue={moment('12:08', format)} format={format} />

  ))