import { Badge } from 'antd';


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('badge', module);
  stories.add('link', () => (
    
  <a href="#">
    <Badge count={5}>
      <span className="head-example" />
    </Badge>
  </a>

  ))