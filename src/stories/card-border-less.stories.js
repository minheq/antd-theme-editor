
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.card', module);
  import { Card } from 'antd';

stories.addWithJSX('border-less', () => (
    
  <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Card title="Card title" bordered={false} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>

  ))