import { Spin } from 'antd';


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('spin', module);
  stories.add('inside', () => (
    
  <div className="example">
    <Spin />
  </div>

  ))