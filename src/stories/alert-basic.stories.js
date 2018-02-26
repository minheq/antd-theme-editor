
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('alert', module);
  import { Alert } from 'antd';

stories.add('basic', () => (
    
  <Alert message="Success Text" type="success" />

  ))