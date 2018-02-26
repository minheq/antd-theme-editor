import { Switch } from 'antd';


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('switch', module);
  stories.add('size', () => (
    
  <div>
    <Switch defaultChecked />
    <br />
    <Switch size="small" defaultChecked />
  </div>

  ))