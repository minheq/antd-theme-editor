
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.spin', module);
  import { Spin } from 'antd';

stories.addWithJSX('size', () => (
    
  <div>
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </div>

  ))