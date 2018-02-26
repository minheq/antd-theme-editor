
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('rate', module);
  import { Rate } from 'antd';

stories.add('clear', () => (
    
  <div>
    <Rate defaultValue={3} /> allowClear: true
    <br />
    <Rate allowClear={false} defaultValue={3} /> allowClear: false
  </div>

  ))