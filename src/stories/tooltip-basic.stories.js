
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.tooltip', module);
  import { Tooltip } from 'antd';

stories.addWithJSX('basic', () => (
    
  <Tooltip title="prompt text">
    <span>Tooltip will show when mouse enter.</span>
  </Tooltip>

  ))