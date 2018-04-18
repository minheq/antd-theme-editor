
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.radio', module);
  import { Radio } from 'antd';

stories.addWithJSX('basic', () => (
    <Radio>Radio</Radio>
  ))