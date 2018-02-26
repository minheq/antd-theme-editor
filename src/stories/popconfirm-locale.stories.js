
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('popconfirm', module);
  import { Popconfirm } from 'antd';

stories.add('locale', () => (
    
  <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
    <a href="#">Delete</a>
  </Popconfirm>

  ))