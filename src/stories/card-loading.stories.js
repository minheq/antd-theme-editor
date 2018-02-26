import { Card } from 'antd';


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('card', module);
  stories.add('loading', () => (
    
  <Card loading title="Card title" style={{ width: '34%' }}>
    Whatever content
  </Card>

  ))