
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('notification', module);
  import { Button, notification } from 'antd';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

stories.add('basic', () => (
    
  <Button type="primary" onClick={openNotification}>Open the notification box</Button>

  ))