
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.avatar', module);
  import { Avatar, Badge } from 'antd';

stories.addWithJSX('badge', () => (
    
  <div>
    <span style={{ marginRight: 24 }}>
      <Badge count={1}><Avatar shape="square" icon="user" /></Badge>
    </span>
    <span>
      <Badge dot><Avatar shape="square" icon="user" /></Badge>
    </span>
  </div>

  ))