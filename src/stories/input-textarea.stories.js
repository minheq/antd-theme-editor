
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.input', module);
  import { Input } from 'antd';
const { TextArea } = Input;

stories.addWithJSX('textarea', () => (
    <TextArea rows={4} />
  ))