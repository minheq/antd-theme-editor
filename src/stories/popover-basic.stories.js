
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('popover', module);
  import { Popover, Button } from 'antd';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

stories.add('basic', () => (
    
  <Popover content={content} title="Title">
    <Button type="primary">Hover me</Button>
  </Popover>

  ))