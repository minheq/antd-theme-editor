
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('breadcrumb', module);
  import { Breadcrumb, Icon } from 'antd';

stories.add('withIcon', () => (
    
  <Breadcrumb>
    <Breadcrumb.Item href="">
      <Icon type="home" />
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <Icon type="user" />
      <span>Application List</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      Application
    </Breadcrumb.Item>
  </Breadcrumb>

  ))