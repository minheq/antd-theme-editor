import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.notification", module);
import { Button, notification, Icon } from "antd";

const openNotification = () => {
  notification.open({
    message: "Notification Title",
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    icon: <Icon type="smile-circle" style={{ color: "#108ee9" }} />
  });
};

stories.addWithJSX("custom-icon", () => (
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>
));
