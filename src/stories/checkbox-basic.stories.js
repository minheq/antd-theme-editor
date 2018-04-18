
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.checkbox', module);
  import { Checkbox } from 'antd';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

stories.addWithJSX('basic', () => (
    
  <Checkbox onChange={onChange}>Checkbox</Checkbox>

  ))