import { Breadcrumb } from 'antd';


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('breadcrumb', module);
  stories.add('separator', () => (
    
  <Breadcrumb separator=">">
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>

  ))