import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.notification", module);
import { Button, notification } from "antd";

const key = "updatable";

const openNotification = () => {
  notification.open({
    key,
    message: "Notification Title",
    description: "description."
  });
  setTimeout(() => {
    notification.open({
      key,
      message: "New Title",
      description: "New description."
    });
  }, 1000);
};

stories.addWithJSX("update", () => (
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>
));
