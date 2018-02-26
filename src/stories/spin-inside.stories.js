
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('spin', module);
  import { Spin } from 'antd';

stories.add('inside', () => (
    
  <div className="example">
    <Spin />
  </div>

  ))