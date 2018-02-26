import { Alert } from 'antd';


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('alert', module);
  stories.add('basic', () => (
    
  <Alert message="Success Text" type="success" />

  ))