
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.switch', module);
  import { Switch } from 'antd';

stories.addWithJSX('size', () => (
    
  <div>
    <Switch defaultChecked />
    <br />
    <Switch size="small" defaultChecked />
  </div>

  ))