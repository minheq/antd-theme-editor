
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('switch', module);
  import { Switch } from 'antd';

stories.add('loading', () => (
    
  <div>
    <Switch loading defaultChecked />
    <br />
    <Switch size="small" loading />
  </div>

  ))