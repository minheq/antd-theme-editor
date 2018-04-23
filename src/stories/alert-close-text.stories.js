
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.alert', module);
  import { Alert } from 'antd';

stories.addWithJSX('close-text', () => (
    
  <Alert message="Info Text" type="info" closeText="Close Now" />

  ))