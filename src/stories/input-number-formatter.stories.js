import { InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('input-number', module);
  stories.add('formatter', () => (
    
  <div>
    <InputNumber
      defaultValue={1000}
      formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={value => value.replace(/\$\s?|(,*)/g, '')}
      onChange={onChange}
    />
    <InputNumber
      defaultValue={100}
      min={0}
      max={100}
      formatter={value => `${value}%`}
      parser={value => value.replace('%', '')}
      onChange={onChange}
    />
  </div>

  ))