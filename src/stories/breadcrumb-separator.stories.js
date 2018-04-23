
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.breadcrumb', module);
  import { Breadcrumb } from 'antd';

stories.addWithJSX('separator', () => (
    
  <Breadcrumb separator=">">
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>

  ))