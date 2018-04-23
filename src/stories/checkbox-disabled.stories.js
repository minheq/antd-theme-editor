
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.checkbox', module);
  import { Checkbox } from 'antd';

stories.addWithJSX('disabled', () => (
    
  <div>
    <Checkbox defaultChecked={false} disabled />
    <br />
    <Checkbox defaultChecked disabled />
  </div>
  
  ))