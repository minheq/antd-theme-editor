
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('breadcrumb', module);
  import { Breadcrumb } from 'antd';

stories.add('basic', () => (
    
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
    <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>

  ))