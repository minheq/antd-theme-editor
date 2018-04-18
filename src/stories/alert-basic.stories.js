
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.alert', module);
  import { Alert } from 'antd';

stories.addWithJSX('basic', () => (
    
  <Alert message="Success Text" type="success" />

  ))