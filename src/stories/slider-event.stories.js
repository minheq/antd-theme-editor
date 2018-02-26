import { Slider } from 'antd';

function onChange(value) {
  console.log('onChange: ', value);
}

function onAfterChange(value) {
  console.log('onAfterChange: ', value);
}


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('slider', module);
  stories.add('event', () => (
    
  <div>
    <Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />
    <Slider range step={10} defaultValue={[20, 50]} onChange={onChange} onAfterChange={onAfterChange} />
  </div>
  ))