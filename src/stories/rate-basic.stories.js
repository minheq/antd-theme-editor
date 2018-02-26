
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('rate', module);
  import { Rate } from 'antd';

stories.add('basic', () => (
    <Rate />
  ))