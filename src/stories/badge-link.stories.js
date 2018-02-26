
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('badge', module);
  import { Badge } from 'antd';

stories.add('link', () => (
    
  <a href="#">
    <Badge count={5}>
      <span className="head-example" />
    </Badge>
  </a>

  ))