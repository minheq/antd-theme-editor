
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.popconfirm', module);
  import { Popconfirm } from 'antd';

stories.addWithJSX('locale', () => (
    
  <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
    <a href="#">Delete</a>
  </Popconfirm>

  ))