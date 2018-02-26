
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('input', module);
  import { Input } from 'antd';
const { TextArea } = Input;

stories.add('textarea', () => (
    <TextArea rows={4} />
  ))