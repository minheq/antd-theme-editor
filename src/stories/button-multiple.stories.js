import { Button, Menu, Dropdown, Icon } from 'antd';

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('button', module);
  stories.add('multiple', () => (
    
  <div>
    <Button type="primary">primary</Button>
    <Button>secondary</Button>
    <Dropdown overlay={menu}>
      <Button>
        Actions <Icon type="down" />
      </Button>
    </Dropdown>
  </div>
  ))