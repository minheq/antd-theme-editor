
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('checkbox', module);
  import { Checkbox } from 'antd';

stories.add('disabled', () => (
    
  <div>
    <Checkbox defaultChecked={false} disabled />
    <br />
    <Checkbox defaultChecked disabled />
  </div>
  
  ))