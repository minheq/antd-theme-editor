
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('radio', module);
  import { Radio } from 'antd';

stories.add('basic', () => (
    <Radio>Radio</Radio>
  ))