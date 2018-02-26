
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('progress', module);
  import { Progress } from 'antd';

stories.add('dashboard', () => (
    <Progress type="dashboard" percent={75} />
  ))