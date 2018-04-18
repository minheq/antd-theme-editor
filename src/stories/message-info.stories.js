
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.message', module);
  import { message, Button } from 'antd';

const info = () => {
  message.info('This is a normal message');
};

stories.addWithJSX('info', () => (
    
  <Button type="primary" onClick={info}>Display normal message</Button>

  ))