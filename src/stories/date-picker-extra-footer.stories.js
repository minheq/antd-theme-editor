import { DatePicker } from 'antd';
const { RangePicker, MonthPicker } = DatePicker;


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('date-picker', module);
  stories.add('extra-footer', () => (
    
  <div>
    <DatePicker renderExtraFooter={() => 'extra footer'} />
    <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
    <RangePicker renderExtraFooter={() => 'extra footer'} />
    <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
    <MonthPicker renderExtraFooter={() => 'extra footer'} placeholder="Select month" />
  </div>

  ))