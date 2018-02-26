
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('input-number', module);
  import { InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

stories.add('basic', () => (
    
  <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />

  ))