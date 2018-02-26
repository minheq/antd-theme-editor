
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('input-number', module);
  import { InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

stories.add('digit', () => (
    
  <InputNumber min={0} max={10} step={0.1} onChange={onChange} />

  ))