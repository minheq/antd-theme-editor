import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('date-picker', module);
  stories.add('date-render', () => (
    
  <div>
    <DatePicker
      dateRender={(current) => {
        const style = {};
        if (current.date() === 1) {
          style.border = '1px solid #1890ff';
          style.borderRadius = '50%';
        }
        return (
          <div className="ant-calendar-date" style={style}>
            {current.date()}
          </div>
        );
      }}
    />
    <RangePicker
      dateRender={(current) => {
        const style = {};
        if (current.date() === 1) {
          style.border = '1px solid #1890ff';
          style.borderRadius = '50%';
        }
        return (
          <div className="ant-calendar-date" style={style}>
            {current.date()}
          </div>
        );
      }}
    />
  </div>

  ))