
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.rate', module);
  import { Rate, Icon } from 'antd';

stories.addWithJSX('character', () => (
    
  <div>
    <Rate character={<Icon type="heart" />} allowHalf />
    <br />
    <Rate character="A" allowHalf style={{ fontSize: 36 }} />
    <br />
    <Rate character="好" allowHalf />
  </div>

  ))