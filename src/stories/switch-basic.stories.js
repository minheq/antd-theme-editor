import { Switch } from 'antd';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('switch', module);
  stories.add('basic', () => (
    
  <Switch defaultChecked onChange={onChange} />
  ))