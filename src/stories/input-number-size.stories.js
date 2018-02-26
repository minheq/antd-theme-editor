import { InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('input-number', module);
  stories.add('size', () => (
    
  <div>
    <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
    <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
    <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} />
  </div>

  ))