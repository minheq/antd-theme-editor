import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.badge", module);
import { Badge } from "antd";

stories.addWithJSX("status", () => (
  <div>
    <Badge status="success" />
    <Badge status="error" />
    <Badge status="default" />
    <Badge status="processing" />
    <Badge status="warning" />
    <br />
    <Badge status="success" text="Success" />
    <br />
    <Badge status="error" text="Error" />
    <br />
    <Badge status="default" text="Default" />
    <br />
    <Badge status="processing" text="Processing" />
    <br />
    <Badge status="warning" text="Warning" />
  </div>
));
