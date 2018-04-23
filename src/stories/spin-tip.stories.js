import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.spin", module);
import { Spin, Alert } from "antd";

stories.addWithJSX("tip", () => (
  <Spin tip="Loading...">
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  </Spin>
));
