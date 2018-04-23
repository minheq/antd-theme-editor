import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.modal", module);
import { Modal, Button } from "antd";

function success() {
  const modal = Modal.success({
    title: "This is a notification message",
    content: "This modal will be destroyed after 1 second"
  });
  setTimeout(() => modal.destroy(), 1000);
}

stories.addWithJSX("manual", () => <Button onClick={success}>Success</Button>);
