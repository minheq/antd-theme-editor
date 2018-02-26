
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('spin', module);
  import { Spin } from 'antd';

stories.add('size', () => (
    
  <div>
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </div>

  ))