
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('select', module);
  import { Select } from 'antd';
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

stories.add('basic', () => (
    
  <div>
    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>Disabled</Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} allowClear disabled>
      <Option value="lucy">Lucy</Option>
    </Select>
  </div>

  ))