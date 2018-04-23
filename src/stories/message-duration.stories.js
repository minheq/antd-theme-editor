import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.message", module);
import { message, Button } from "antd";

const success = () => {
  message.success(
    "This is a prompt message for success, and it will disappear in 10 seconds",
    10
  );
};

stories.addWithJSX("duration", () => (
  <Button onClick={success}>Customized display duration</Button>
));
