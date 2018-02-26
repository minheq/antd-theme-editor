import { Select } from 'antd';
const Option = Select.Option;

function handleChange(value) {
  console.log(value); // { key: "lucy", label: "Lucy (101)" }
}


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('select', module);
  stories.add('label-in-value', () => (
    
  <Select labelInValue defaultValue={{ key: 'lucy' }} style={{ width: 120 }} onChange={handleChange}>
    <Option value="jack">Jack (100)</Option>
    <Option value="lucy">Lucy (101)</Option>
  </Select>

  ))