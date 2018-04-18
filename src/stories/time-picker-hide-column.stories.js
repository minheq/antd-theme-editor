
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.time-picker', module);
  import { TimePicker } from 'antd';
import moment from 'moment';

const format = 'HH:mm';

stories.addWithJSX('hide-column', () => (
    
  <TimePicker defaultValue={moment('12:08', format)} format={format} />

  ))