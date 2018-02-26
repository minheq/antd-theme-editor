
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('select', module);
  import { Select } from 'antd';
const { Option, OptGroup } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

stories.add('optgroup', () => (
    
  <Select
    defaultValue="lucy"
    style={{ width: 200 }}
    onChange={handleChange}
  >
    <OptGroup label="Manager">
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
    </OptGroup>
    <OptGroup label="Engineer">
      <Option value="Yiminghe">yiminghe</Option>
    </OptGroup>
  </Select>

  ))