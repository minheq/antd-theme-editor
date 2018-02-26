
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('rate', module);
  import { Rate } from 'antd';

stories.add('half', () => (
    <Rate allowHalf defaultValue={2.5} />
  ))