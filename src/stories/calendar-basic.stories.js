
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('calendar', module);
  import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

stories.add('basic', () => (
    
  <Calendar onPanelChange={onPanelChange} />

  ))