
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('tooltip', module);
  import { Tooltip } from 'antd';

stories.add('basic', () => (
    
  <Tooltip title="prompt text">
    <span>Tooltip will show when mouse enter.</span>
  </Tooltip>

  ))