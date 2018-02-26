import { Carousel } from 'antd';

function onChange(a, b, c) {
  console.log(a, b, c);
}


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('carousel', module);
  stories.add('basic', () => (
    
  <Carousel afterChange={onChange}>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </Carousel>

  ))