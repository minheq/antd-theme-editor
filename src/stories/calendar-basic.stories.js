
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.calendar', module);
  import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

stories.addWithJSX('basic', () => (
    
  <Calendar onPanelChange={onPanelChange} />

  ))