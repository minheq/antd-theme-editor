
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('divider', module);
  import { Divider } from 'antd';

stories.add('vertical', () => (
    
  <div>
    Text
    <Divider type="vertical" />
    <a href="#">Link</a>
    <Divider type="vertical" />
    <a href="#">Link</a>
  </div>

  ))