import { Progress } from 'antd';


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('progress', module);
  stories.add('line-mini', () => (
    
  <div style={{ width: 170 }}>
    <Progress percent={30} size="small" />
    <Progress percent={50} size="small" status="active" />
    <Progress percent={70} size="small" status="exception" />
    <Progress percent={100} size="small" />
  </div>

  ))