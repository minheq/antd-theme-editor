import { message, Button } from 'antd';

const info = () => {
  message.info('This is a normal message');
};


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('message', module);
  stories.add('info', () => (
    
  <Button type="primary" onClick={info}>Display normal message</Button>

  ))