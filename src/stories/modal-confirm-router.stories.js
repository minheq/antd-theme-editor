import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.modal", module);
import { Modal, Button } from "antd";

function destroyAll() {
  Modal.destroyAll();
}

const confirm = Modal.confirm;

function showConfirm() {
  for (let i = 0; i < 3; i += 1) {
    setTimeout(() => {
      confirm({
        content: <Button onClick={destroyAll}>Click to destroy all</Button>,
        onOk() {
          console.log("OK");
        },
        onCancel() {
          console.log("Cancel");
        }
      });
    }, i * 500);
  }
}

stories.addWithJSX("confirm-router", () => (
  <div>
    <Button onClick={showConfirm}>Confirm</Button>
  </div>
));
