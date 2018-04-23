
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.card', module);
  import { Card } from 'antd';

stories.addWithJSX('loading', () => (
    
  <Card loading title="Card title" style={{ width: '34%' }}>
    Whatever content
  </Card>

  ))