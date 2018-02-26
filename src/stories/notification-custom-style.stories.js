import { Button, notification } from 'antd';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    style: {
      width: 600,
      marginLeft: 335 - 600,
    },
  });
};


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('notification', module);
  stories.add('custom-style', () => (
    
  <Button type="primary" onClick={openNotification}>Open the notification box</Button>

  ))