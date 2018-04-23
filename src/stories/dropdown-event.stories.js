import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.dropdown", module);
import { Menu, Dropdown, Icon, message } from "antd";
const onClick = function({ key }) {
  message.info(`Click on item ${key}`);
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd memu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

stories.addWithJSX("event", () => (
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
      Hover me, Click menu item <Icon type="down" />
    </a>
  </Dropdown>
));
