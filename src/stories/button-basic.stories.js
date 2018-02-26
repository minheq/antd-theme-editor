
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('button', module);
  import { Button } from 'antd';

stories.add('basic', () => (
    
  <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
  </div>

  ))