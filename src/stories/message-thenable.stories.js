import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.message", module);
import { message, Button } from "antd";

const success = () => {
  message
    .loading("Action in progress..", 2.5)
    .then(() => message.success("Loading finished", 2.5))
    .then(() => message.info("Loading finished is finished", 2.5));
};

stories.addWithJSX("thenable", () => (
  <Button onClick={success}>Display sequential messages</Button>
));
