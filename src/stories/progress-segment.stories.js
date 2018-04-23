
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.progress', module);
  import { Tooltip, Progress } from 'antd';

stories.addWithJSX('segment', () => (
    
  <Tooltip title="3 done / 3 in progress / 4 to do">
    <Progress percent={60} successPercent={30} />
  </Tooltip>

  ))