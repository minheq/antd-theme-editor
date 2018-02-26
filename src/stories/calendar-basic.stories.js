import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('calendar', module);
  stories.add('basic', () => (
    
  <Calendar onPanelChange={onPanelChange} />

  ))