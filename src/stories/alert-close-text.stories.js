import { Alert } from 'antd';


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('alert', module);
  stories.add('close-text', () => (
    
  <Alert message="Info Text" type="info" closeText="Close Now" />

  ))