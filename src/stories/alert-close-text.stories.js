
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('alert', module);
  import { Alert } from 'antd';

stories.add('close-text', () => (
    
  <Alert message="Info Text" type="info" closeText="Close Now" />

  ))