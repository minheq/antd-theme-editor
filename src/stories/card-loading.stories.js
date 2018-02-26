
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('card', module);
  import { Card } from 'antd';

stories.add('loading', () => (
    
  <Card loading title="Card title" style={{ width: '34%' }}>
    Whatever content
  </Card>

  ))