
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('checkbox', module);
  import { Checkbox } from 'antd';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

stories.add('basic', () => (
    
  <Checkbox onChange={onChange}>Checkbox</Checkbox>

  ))