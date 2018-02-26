import { InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('input-number', module);
  stories.add('basic', () => (
    
  <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />

  ))