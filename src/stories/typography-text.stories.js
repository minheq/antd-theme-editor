import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.typography", module);
import { Typography } from "antd";

const { Text } = Typography;

stories.addWithJSX("text", () => (
  <div>
    <Text>Ant Design</Text>
    <br />
    <Text type="secondary">Ant Design</Text>
    <br />
    <Text type="warning">Ant Design</Text>
    <br />
    <Text type="danger">Ant Design</Text>
    <br />
    <Text disabled>Ant Design</Text>
    <br />
    <Text mark>Ant Design</Text>
    <br />
    <Text code>Ant Design</Text>
    <br />
    <Text underline>Ant Design</Text>
    <br />
    <Text delete>Ant Design</Text>
    <br />
    <Text strong>Ant Design</Text>
  </div>
));
