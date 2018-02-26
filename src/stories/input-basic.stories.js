
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('input', module);
  import { Input } from 'antd';

stories.add('basic', () => (
    <Input placeholder="Basic usage" />
  ))