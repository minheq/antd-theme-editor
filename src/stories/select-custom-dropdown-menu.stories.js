import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.select", module);
import { Select, Icon, Divider } from "antd";

const Option = Select.Option;

stories.addWithJSX("custom-dropdown-menu", () => (
  <Select
    defaultValue="lucy"
    style={{ width: 120 }}
    dropdownRender={menu => (
      <div>
        {menu}
        <Divider style={{ margin: "4px 0" }} />
        <div style={{ padding: "8px", cursor: "pointer" }}>
          <Icon type="plus" /> Add item
        </div>
      </div>
    )}
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
  </Select>
));
