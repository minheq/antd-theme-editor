import { Switch } from 'antd';


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('switch', module);
  stories.add('loading', () => (
    
  <div>
    <Switch loading defaultChecked />
    <br />
    <Switch size="small" loading />
  </div>

  ))