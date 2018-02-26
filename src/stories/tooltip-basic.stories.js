import { Tooltip } from 'antd';


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('tooltip', module);
  stories.add('basic', () => (
    
  <Tooltip title="prompt text">
    <span>Tooltip will show when mouse enter.</span>
  </Tooltip>

  ))